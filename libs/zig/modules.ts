import { fromEntries, map, pipe, toEntries } from "../utils";

export const modules = validateModules(<const>{
  'math': {
    'add': {
      args: {
        'first': 'f32',
        'second': 'f32',
      },
      returns: 'f32',
    }
  }
});

function validateModules<T extends Record<string, ModuleSchema>>(modules: T): T {
  return modules;
}

type ModuleSchema = Record<string, FunctionSchema>;
type FunctionSchema = {
  args: StructSchema,
  returns: StructSchema | TypeSchema,
};
type StructSchema = { [key: string]: TypeSchema | StructSchema };
type TypeSchema = TypeBaseSchema | `${TypeBaseSchema}[]`;
type TypeBaseSchema = 'f32' | 'i32';

type ModuleToCalls<Module extends ModuleSchema> = {
  [func in keyof Module]: FuncToCall<Module[func]>
};
type ArgsToCall<Args extends StructSchema> = {
  [arg in keyof Args]: ArgToCall<Args[arg]>
};
type TypeBaseToCall<Type> = Type extends 'f32' ? number : Type extends 'i32' ? number : never;
type ArgToCall<Arg extends TypeSchema | StructSchema> = Arg extends string
  ? Arg extends `${infer Base}[]`
  ? TypeBaseToCall<Base>[]
  : TypeBaseToCall<Arg>
  : Arg extends StructSchema
  ? { [key in keyof Arg]: ArgToCall<Arg[key]> }
  : never;
type FuncToCall<Decl extends FunctionSchema> = (args: ArgsToCall<Decl['args']>) => ArgToCall<Decl['returns']>;
export const zigModules = pipe(modules)
  .into(toEntries)
  .into(map(([name, module]) => <const>[name, async () => {
    const response: Response = await fetch(`zig/${name}`);
    const bytes = await response.arrayBuffer();
    const results = await WebAssembly.instantiate(bytes, {});
    return pipe(module)
      .into(toEntries)
      .into(map(([name, func]) => <const>[
        name,
        (args: any) => (results.instance.exports[name] as any)(...Object.values(args)) as FuncToCall<typeof func>
      ]))
      .outFrom(fromEntries);
  }]))
  .outFrom(fromEntries)


zigModules.math().then(math => {
  const result = math.add({ first: 1, second: 2 });
});
