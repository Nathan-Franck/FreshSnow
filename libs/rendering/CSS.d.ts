export type PropertyValue<TValue> = TValue extends Array<infer AValue>
  ? Array<AValue extends infer TUnpacked & {} ? TUnpacked : AValue>
  : TValue extends infer TUnpacked & {}
  ? TUnpacked
  : TValue;

export interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: Property.AlignContent;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **52**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: Property.AlignItems;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **36**  | **20**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: Property.AlignSelf;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: Property.Appearance;
  /**
   * The **`aspect-ratio`**  ?? CSS property sets a _**preferred aspect ratio**_ for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   * **Initial value**: `auto`
   */
  aspectRatio?: Property.AspectRatio;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **76** |   n/a   | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: Property.BackdropFilter;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
   * | :------: | :------: | :-----------: | :----: | :----: |
   * |  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |               |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: Property.BackfaceVisibility;
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: Property.BackgroundAttachment;
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: Property.BackgroundBlendMode;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |  IE   |
   * | :----: | :-----: | :---------: | :----: | :---: |
   * | **1**  |  **4**  | **3** _-x-_ | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: Property.BackgroundClip;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: Property.BackgroundColor;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: Property.BackgroundImage;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: Property.BackgroundOrigin;
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: Property.BackgroundPosition<TLength>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: Property.BackgroundPositionX<TLength>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: Property.BackgroundPositionY<TLength>;
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: Property.BackgroundRepeat;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: Property.BackgroundSize<TLength>;
  /** **Initial value**: `clip` */
  blockOverflow?: Property.BlockOverflow;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: Property.BlockSize<TLength>;
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block??borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and??`border-bottom-color`, or `border-right-color` and??`border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  borderBlockColor?: Property.BorderBlockColor;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: Property.BorderBlockEndColor;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: Property.BorderBlockEndStyle;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: Property.BorderBlockStartColor;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: Property.BorderBlockStartStyle;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength>;
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and??`border-bottom-style`, or??`border-left-style` and??`border-right-style` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  borderBlockStyle?: Property.BorderBlockStyle;
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block??borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and??`border-bottom-width`, or `border-left-width`, and??`border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  borderBlockWidth?: Property.BorderBlockWidth<TLength>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: Property.BorderBottomColor;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: Property.BorderBottomStyle;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: Property.BorderBottomWidth<TLength>;
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: Property.BorderCollapse;
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  borderEndEndRadius?: Property.BorderEndEndRadius<TLength>;
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius??depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  borderEndStartRadius?: Property.BorderEndStartRadius<TLength>;
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: Property.BorderImageOutset<TLength>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: Property.BorderImageRepeat;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: Property.BorderImageSlice;
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: Property.BorderImageSource;
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: Property.BorderImageWidth<TLength>;
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline??borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and??`border-bottom-color`, or `border-right-color` and??`border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  borderInlineColor?: Property.BorderInlineColor;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: Property.BorderInlineEndColor;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-style)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: Property.BorderInlineEndStyle;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: Property.BorderInlineStartColor;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-start-style)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: Property.BorderInlineStartStyle;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength>;
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline??borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and??`border-bottom-style`, or??`border-left-style` and??`border-right-style` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  borderInlineStyle?: Property.BorderInlineStyle;
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline??borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and??`border-bottom-width`, or `border-left-width`, and??`border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  borderInlineWidth?: Property.BorderInlineWidth<TLength>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: Property.BorderLeftColor;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: Property.BorderLeftStyle;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: Property.BorderLeftWidth<TLength>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: Property.BorderRightColor;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: Property.BorderRightStyle;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: Property.BorderRightWidth<TLength>;
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: Property.BorderSpacing<TLength>;
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius??depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  borderStartEndRadius?: Property.BorderStartEndRadius<TLength>;
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  borderStartStartRadius?: Property.BorderStartStartRadius<TLength>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: Property.BorderTopColor;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: Property.BorderTopRightRadius<TLength>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: Property.BorderTopStyle;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: Property.BorderTopWidth<TLength>;
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: Property.Bottom<TLength>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: Property.BoxDecorationBreak;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: Property.BoxShadow;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: Property.BoxSizing;
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: Property.BreakAfter;
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: Property.BreakBefore;
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: Property.BreakInside;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: Property.CaptionSide;
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: Property.CaretColor;
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: Property.Clear;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **55**  | **3.5** |  **9.1**  | **12** | **10** |
   * | 23 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: Property.ClipPath;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: Property.Color;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  colorAdjust?: Property.ColorAdjust;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :------: | :-----: | :----: | :----: |
   * | **50** |  **52**  |  **9**  | **12** | **10** |
   * |        | 13 _-x-_ | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |   No   | **63**  | **3** _-x-_ |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   | **10**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **50**  | **71**  |   **9**   | **12** | **10** |
   * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: Property.ColumnSpan;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **50**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: Property.ColumnWidth<TLength>;
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  contain?: Property.Contain;
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: Property.Content;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: Property.CounterIncrement;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: Property.CounterReset;
  /**
   * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will??only create new counters if there isn't already a counter of the given name on the element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-set
   */
  counterSet?: Property.CounterSet;
  /**
   * The **`cursor`** CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: Property.Cursor;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: Property.Direction;
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout,??grid or flex.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: Property.Display;
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: Property.EmptyCells;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: Property.Filter;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: Property.FlexBasis<TLength>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |            IE            |
   * | :------: | :-----: | :-------: | :----: | :----------------------: |
   * |  **29**  | **20**  |   **9**   | **12** |          **11**          |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: Property.FlexGrow;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 21 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: Property.FlexShrink;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: Property.FlexWrap;
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: Property.Float;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: Property.FontFamily;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: Property.FontFeatureSettings;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: Property.FontKerning;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: Property.FontLanguageOverride;
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **79** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: Property.FontOpticalSizing;
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: Property.FontSize<TLength>;
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **54** |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: Property.FontSizeAdjust;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **60** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: Property.FontStretch;
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: Property.FontStyle;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: Property.FontSynthesis;
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: Property.FontVariant;
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: Property.FontVariantCaps;
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: Property.FontVariantEastAsian;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: Property.FontVariantLigatures;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: Property.FontVariantNumeric;
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: Property.FontVariantPosition;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: Property.FontVariationSettings;
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` you are using.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: Property.FontWeight;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: Property.GridAutoColumns<TLength>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: Property.GridAutoFlow;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track??or pattern of tracks.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: Property.GridAutoRows<TLength>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item???s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: Property.GridColumnEnd;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item???s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: Property.GridColumnStart;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item???s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: Property.GridRowEnd;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item???s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: Property.GridRowStart;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: Property.GridTemplateAreas;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: Property.GridTemplateColumns<TLength>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: Property.GridTemplateRows<TLength>;
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **10** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation?: Property.HangingPunctuation;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: Property.Height<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     |     Edge     |      IE      |
   * | :------: | :-----: | :-----------: | :----------: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: Property.Hyphens;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: Property.ImageOrientation;
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **13** | **3.6** | **6**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: Property.ImageRendering;
  /** **Initial value**: `1dppx` */
  imageResolution?: Property.ImageResolution;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: Property.InitialLetter;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: Property.InlineSize<TLength>;
  /**
   * The **`inset`**??CSS property, though part of the logical specification, doesn't define logical block or inline offsets, and instead defines physical offsets, regardless of the element's writing mode, directionality, and text orientation. It has the same multi-value syntax of the `margin` shorthand. It is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  inset?: Property.Inset<TLength>;
  /**
   * The **`inset-block`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  insetBlock?: Property.InsetBlock<TLength>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd?: Property.InsetBlockEnd<TLength>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  insetBlockStart?: Property.InsetBlockStart<TLength>;
  /**
   * The **`inset-inline`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  insetInline?: Property.InsetInline<TLength>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd?: Property.InsetInlineEnd<TLength>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart?: Property.InsetInlineStart<TLength>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: Property.Isolation;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **52**  | **20**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: Property.JustifyContent;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: Property.JustifyItems;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: Property.JustifySelf;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: Property.Left<TLength>;
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: Property.LetterSpacing<TLength>;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE    |
   * | :-----: | :-----: | :---------: | :----: | :-----: |
   * | **58**  | **69**  | **3** _-x-_ | **14** | **5.5** |
   * | 1 _-x-_ |         |             |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: Property.LineBreak;
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: Property.LineHeight<TLength>;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
   */
  lineHeightStep?: Property.LineHeightStep<TLength>;
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: Property.ListStyleImage;
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: Property.ListStylePosition;
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: Property.ListStyleType;
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  marginBlock?: Property.MarginBlock<TLength>;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: Property.MarginBlockEnd<TLength>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: Property.MarginBlockStart<TLength>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: Property.MarginBottom<TLength>;
  /**
   * The **`margin-inline`**??CSS property defines the logical inline??start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  marginInline?: Property.MarginInline<TLength>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         |  No  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          |  No  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: Property.MarginInlineStart<TLength>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: Property.MarginLeft<TLength>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: Property.MarginRight<TLength>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: Property.MarginTop<TLength>;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   * **Initial value**: `alpha`
   */
  maskBorderMode?: Property.MaskBorderMode;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   * **Initial value**: `0`
   */
  maskBorderOutset?: Property.MaskBorderOutset<TLength>;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   * **Initial value**: `stretch`
   */
  maskBorderRepeat?: Property.MaskBorderRepeat;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   * **Initial value**: `0`
   */
  maskBorderSlice?: Property.MaskBorderSlice;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   * **Initial value**: `none`
   */
  maskBorderSource?: Property.MaskBorderSource;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   * **Initial value**: `auto`
   */
  maskBorderWidth?: Property.MaskBorderWidth<TLength>;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: Property.MaskClip;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **53**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: Property.MaskComposite;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: Property.MaskImage;
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: Property.MaskMode;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: Property.MaskOrigin;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
   * | :---------: | :-----: | :-----------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: Property.MaskPosition<TLength>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
   * | :---------: | :-----: | :-----------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: Property.MaskRepeat;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: Property.MaskSize<TLength>;
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **24** | **35**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: Property.MaskType;
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  maxBlockSize?: Property.MaxBlockSize<TLength>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: Property.MaxHeight<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |   Safari   | Edge | IE  |
   * | :----: | :-----: | :--------: | :--: | :-: |
   * | **57** | **41**  |  **12.1**  |  No  | No  |
   * |        |         | 10.1 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: Property.MaxInlineSize<TLength>;
  /** **Initial value**: `none` */
  maxLines?: Property.MaxLines;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: Property.MaxWidth<TLength>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: Property.MinBlockSize<TLength>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: Property.MinHeight<TLength>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: Property.MinInlineSize<TLength>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: Property.MinWidth<TLength>;
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: Property.MixBlendMode;
  /**
   * The??**`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: Property.OffsetDistance<TLength>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: Property.OffsetPath;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: Property.OffsetRotate;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: Property.ObjectFit;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: Property.ObjectPosition<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **79** |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   */
  offsetAnchor?: Property.OffsetAnchor<TLength>;
  /**
   * The??**`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: Property.OffsetDistance<TLength>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: Property.OffsetPath;
  /** **Initial value**: `auto` */
  offsetPosition?: Property.OffsetPosition<TLength>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: Property.OffsetRotate;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: Property.OffsetRotate;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: Property.Opacity;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: Property.Order;
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: Property.Orphans;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: Property.OutlineColor;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: Property.OutlineOffset<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: Property.OutlineStyle;
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: Property.OutlineWidth<TLength>;
  /**
   * The **`overflow`** shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: Property.Overflow;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **56** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor?: Property.OverflowAnchor;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
   */
  overflowBlock?: Property.OverflowBlock;
  /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **29**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box
   */
  overflowClipBox?: Property.OverflowClipBox;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   */
  overflowInline?: Property.OverflowInline;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: Property.OverflowWrap;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: Property.OverflowX;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: Property.OverflowY;
  /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: Property.OverscrollBehavior;
  /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: Property.OverscrollBehaviorX;
  /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: Property.OverscrollBehaviorY;
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding??of an element, which maps to physical padding properties??depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  paddingBlock?: Property.PaddingBlock<TLength>;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: Property.PaddingBlockEnd<TLength>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: Property.PaddingBlockStart<TLength>;
  /**
   * The **`padding-bottom`** CSS property??sets the height of the??padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: Property.PaddingBottom<TLength>;
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding??of an element, which maps to physical padding properties??depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  paddingInline?: Property.PaddingInline<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          |  No  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           |  No  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`padding-left`**??CSS property??sets the width of the??padding area??to??the left of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: Property.PaddingLeft<TLength>;
  /**
   * The **`padding-right`** CSS property??sets the width of the??padding area on the right of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: Property.PaddingRight<TLength>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: Property.PaddingTop<TLength>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: Property.PageBreakAfter;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: Property.PageBreakBefore;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: Property.PageBreakInside;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **60**  | **8**  | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: Property.PaintOrder;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: Property.PerspectiveOrigin<TLength>;
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It??can be used in any layout method which utilizes both of these alignment values.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **9**  |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **53**  | **11** |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: Property.PlaceContent;
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: Property.PointerEvents;
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: Property.Position;
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: Property.Quotes;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |  **4**  | **3**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: Property.Resize;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: Property.Right<TLength>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: Property.Rotate;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: Property.RowGap<TLength>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: Property.RubyAlign;
  /** **Initial value**: `separate` */
  rubyMerge?: Property.RubyMerge;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: Property.RubyPosition;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: Property.Scale;
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **61** | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: Property.ScrollBehavior;
  /**
   * The **`scroll-margin`** property is a shorthand??property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  scrollMargin?: Property.ScrollMargin<TLength>;
  /**
   * The `scroll-margin-block`??property is a shorthand??property which sets the scroll-margin??longhands in the block dimension.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  scrollMarginBlock?: Property.ScrollMarginBlock<TLength>;
  /**
   * The `scroll-margin-block-end`??property defines the??margin of??the scroll snap area at the end??of the block dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength>;
  /**
   * The `scroll-margin-block-start`??property defines the??margin of??the scroll snap area at the start of the block dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength>;
  /**
   * The `scroll-margin-bottom`??property defines the bottom??margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  scrollMarginBottom?: Property.ScrollMarginBottom<TLength>;
  /**
   * The `scroll-margin-inline`??property is a shorthand??property which sets the scroll-margin??longhands in the inline??dimension.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
  scrollMarginInline?: Property.ScrollMarginInline<TLength>;
  /**
   * The `scroll-margin-inline-end`??property defines the??margin of??the scroll snap area at the end??of the inline??dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength>;
  /**
   * The `scroll-margin-inline-start`??property defines the??margin of??the scroll snap area at the start of the inline??dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength>;
  /**
   * The `scroll-margin-left`??property defines the left margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  scrollMarginLeft?: Property.ScrollMarginLeft<TLength>;
  /**
   * The `scroll-margin-right`??property defines the right??margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginRight?: Property.ScrollMarginRight<TLength>;
  /**
   * The `scroll-margin-top`??property defines the top margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginTop?: Property.ScrollMarginTop<TLength>;
  /**
   * The **`scroll-padding`** property is a shorthand property that sets all of the `scroll-padding-*` longhands. It assigns values much like the `padding` property does for the `padding-*` longhands.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  scrollPadding?: Property.ScrollPadding<TLength>;
  /**
   * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength>;
  /**
   * The `scroll-padding-block-end`??property??defines offsets for the end??edge in the block??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength>;
  /**
   * The `scroll-padding-block-start`??property??defines offsets for the start edge in the block??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength>;
  /**
   * The `scroll-padding-bottom`??property??defines offsets for the bottom??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength>;
  /**
   * The `scroll-padding-inline`??property is a shorthand??property which sets??the scroll-padding longhands for the inline??dimension.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  scrollPaddingInline?: Property.ScrollPaddingInline<TLength>;
  /**
   * The `scroll-padding-inline-end`??property??defines offsets for the end??edge in the inline??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength>;
  /**
   * The `scroll-padding-inline-start`??property??defines offsets for the start edge in the inline dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength>;
  /**
   * The `scroll-padding-left`??property??defines offsets for the left??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength>;
  /**
   * The `scroll-padding-right`??property??defines offsets for the right??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingRight?: Property.ScrollPaddingRight<TLength>;
  /**
   * The `scroll-padding-top` property??defines offsets for the top of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingTop?: Property.ScrollPaddingTop<TLength>;
  /**
   * The `scroll-snap-align` property specifies the box???s snap position as an alignment of its snap area (as the alignment subject) within its snap container???s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  scrollSnapAlign?: Property.ScrollSnapAlign;
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **75** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
  scrollSnapStop?: Property.ScrollSnapStop;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |     Edge     |      IE      |
   * | :----: | :-----: | :-----: | :----------: | :----------: |
   * | **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |
   * |        |         | 9 _-x-_ |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: Property.ScrollSnapType;
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  scrollbarColor?: Property.ScrollbarColor;
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element???s scrollbars when they are shown.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
  scrollbarWidth?: Property.ScrollbarWidth;
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: Property.ShapeImageThreshold;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: Property.ShapeMargin<TLength>;
  /**
   * The **`shape-outside`** CSS property defines a shape???which may be non-rectangular???around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: Property.ShapeOutside;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: Property.TabSize<TLength>;
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: Property.TableLayout;
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a??block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: Property.TextAlign;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  |   No   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: Property.TextAlignLast;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * |           Chrome           | Firefox |              Safari              |                  Edge                  |                   IE                   |
   * | :------------------------: | :-----: | :------------------------------: | :------------------------------------: | :------------------------------------: |
   * |           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | **12** _(-ms-text-combine-horizontal)_ | **11** _(-ms-text-combine-horizontal)_ |
   * | 9 _(-webkit-text-combine)_ |         |                                  |                                        |                                        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: Property.TextCombineUpright;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element???s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: Property.TextDecorationSkip;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **70**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Property.TextDecorationSkipInk;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: Property.TextDecorationStyle;
  /**
   * The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationThickness?: Property.TextDecorationThickness<TLength>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  textDecorationWidth?: Property.TextDecorationThickness<TLength>;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: Property.TextEmphasisColor;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: Property.TextEmphasisPosition;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: Property.TextEmphasisStyle;
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: Property.TextIndent<TLength>;
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: Property.TextJustify;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * |  Chrome  | Firefox |    Safari     | Edge | IE  |
   * | :------: | :-----: | :-----------: | :--: | :-: |
   * |  **48**  | **41**  | **5.1** _-x-_ |  No  | No  |
   * | 11 _-x-_ |         |               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: Property.TextOrientation;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: Property.TextOverflow;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **1**  | **5**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: Property.TextRendering;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: Property.TextShadow;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: Property.TextSizeAdjust;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: Property.TextTransform;
  /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
  textUnderlineOffset?: Property.TextUnderlineOffset<TLength>;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: Property.TextUnderlinePosition;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: Property.Top<TLength>;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: Property.TouchAction;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
   * | :-----: | :-----: | :-------: | :----: | :-----: |
   * | **36**  | **16**  |   **9**   | **12** | **10**  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: Property.Transform;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: Property.TransformBox;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
   * | :-----: | :-------: | :-----: | :----: | :-----: |
   * | **36**  |  **16**   |  **9**  | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
   * | :------: | :------: | :-----: | :----: | :-: |
   * |  **36**  |  **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: Property.TransitionTimingFunction;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: Property.Translate<TLength>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: Property.UnicodeBidi;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |     Edge     |      IE      |
   * | :-----: | :-----: | :---------: | :----------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: Property.UserSelect;
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: Property.VerticalAlign<TLength>;
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: Property.Visibility;
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: Property.WhiteSpace;
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: Property.Widows;
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: Property.Width<TLength>;
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: Property.WillChange;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: Property.WordBreak;
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: Property.WordSpacing<TLength>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **2**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: Property.WordWrap;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |     IE      |
   * | :-----: | :-----: | :-------: | :----: | :---------: |
   * | **48**  | **41**  | **10.1**  | **12** | **9** _-x-_ |
   * | 8 _-x-_ |         | 5.1 _-x-_ |        |             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: Property.WritingMode;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: Property.ZIndex;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **1**  |   No    | **3.1** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: Property.Zoom;
}

export interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The `**all**` shorthand CSS property resets all of an element's properties (except `unicode-bidi` and `direction`). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **37** | **27**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Property.All;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: Property.Animation<TTime>;
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: Property.Background<TLength>;
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: Property.Border<TLength>;
  /**
   * The **`border-block`**??CSS property is a shorthand property for setting the individual logical block??border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  borderBlock?: Property.BorderBlock<TLength>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: Property.BorderBlockEnd<TLength>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: Property.BorderBlockStart<TLength>;
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: Property.BorderBottom<TLength>;
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: Property.BorderColor;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: Property.BorderImage;
  /**
   * The **`border-inline`**??CSS property is a shorthand property for setting the individual logical inline??border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  borderInline?: Property.BorderInline<TLength>;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: Property.BorderInlineEnd<TLength>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: Property.BorderInlineStart<TLength>;
  /**
   * The **`border-left`** shorthand CSS property set an element's left border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: Property.BorderLeft<TLength>;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: Property.BorderRadius<TLength>;
  /**
   * The **`border-right`** shorthand CSS property sets an element's right border. It sets the values of `border-right-width`, `border-right-style` and `border-right-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: Property.BorderRight<TLength>;
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: Property.BorderStyle;
  /**
   * The **`border-top`** shorthand CSS property set an element's top border. It sets the values of `border-top-width`, `border-top-style` and `border-top-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: Property.BorderTop<TLength>;
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: Property.BorderWidth<TLength>;
  /**
   * The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: Property.ColumnRule<TLength>;
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        | 9 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: Property.Columns<TLength>;
  /**
   * The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  | **20**  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: Property.Flex<TLength>;
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: Property.FlexFlow;
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: Property.Font;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **66** | **61**  |   No   | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: Property.Gap<TLength>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`),??in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: Property.Grid;
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item???s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: Property.GridArea;
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: Property.GridColumn;
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item???s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: Property.GridRow;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: Property.GridTemplate;
  /** **Initial value**: `none` */
  lineClamp?: Property.LineClamp;
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: Property.ListStyle;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: Property.Margin<TLength>;
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  |  **2**  | **3.2** | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: Property.Mask<TLength>;
  /** The **`mask-border`** CSS property lets you create a mask along the edge of an element's border. */
  maskBorder?: Property.MaskBorder;
  /**
   * The **`offset`** CSS??property is a shorthand property for animating an element along a defined path. It sets the values of `offset-position`, `offset-path`, `offset-distance`, `offset-rotate`, and `offset-anchor`.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     | **71**  |   No   |  No  | No  |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: Property.Offset<TLength>;
  /**
   * The **`offset`** CSS??property is a shorthand property for animating an element along a defined path. It sets the values of `offset-position`, `offset-path`, `offset-distance`, `offset-rotate`, and `offset-anchor`.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     | **71**  |   No   |  No  | No  |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: Property.Offset<TLength>;
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: Property.Outline<TLength>;
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: Property.Padding<TLength>;
  /**
   * The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **11** |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **11** |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  placeItems?: Property.PlaceItems;
  /**
   * The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  placeSelf?: Property.PlaceSelf;
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: Property.TextDecoration<TLength>;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: Property.TextEmphasis;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: Property.Transition<TTime>;
}

export interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandProperties<TLength, TTime>,
    StandardShorthandProperties<TLength, TTime> {}

export interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   */
  MozAnimationDelay?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   */
  MozAnimationDirection?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   */
  MozAnimationDuration?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   */
  MozAnimationFillMode?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   */
  MozAnimationIterationCount?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   */
  MozAnimationName?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   */
  MozAnimationPlayState?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   */
  MozAnimationTimingFunction?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  MozAppearance?: Property.MozAppearance;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   */
  MozBackfaceVisibility?: Property.BackfaceVisibility;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderEndColor?: Property.BorderInlineEndColor;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   */
  MozBorderEndStyle?: Property.BorderInlineEndStyle;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   */
  MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderStartColor?: Property.BorderInlineStartColor;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   */
  MozBorderStartStyle?: Property.BorderInlineStartStyle;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   */
  MozBoxSizing?: Property.BoxSizing;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   */
  MozColumnCount?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   */
  MozColumnFill?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   */
  MozColumnGap?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   */
  MozColumnRuleColor?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   */
  MozColumnRuleStyle?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   */
  MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   */
  MozColumnWidth?: Property.ColumnWidth<TLength>;
  /**
   * If you reference an SVG image in a webpage (such as with the `<img>` element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the **`-moz-context-properties`** property, and the image needs to opt in to using those properties by using values such as the `context-fill` value.
   *
   * **Initial value**: `none`
   */
  MozContextProperties?: Property.MozContextProperties;
  /**
   * The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
   *
   * **Initial value**: `content-box`
   */
  MozFloatEdge?: Property.MozFloatEdge;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   */
  MozFontFeatureSettings?: Property.FontFeatureSettings;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   */
  MozFontLanguageOverride?: Property.FontLanguageOverride;
  /**
   * The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.
   *
   * **Initial value**: `0`
   */
  MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  MozHyphens?: Property.Hyphens;
  /**
   * For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
   *
   * **Initial value**: `auto`
   */
  MozImageRegion?: Property.MozImageRegion;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  MozMarginEnd?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  MozMarginStart?: Property.MarginInlineStart<TLength>;
  /**
   * The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.
   *
   * **Initial value**: `inline`
   */
  MozOrient?: Property.MozOrient;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  MozPaddingEnd?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  MozPaddingStart?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   */
  MozPerspective?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   */
  MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength>;
  /**
   * **`-moz-stack-sizing`** is an extended CSS property. Normally, a `stack` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
   *
   * **Initial value**: `stretch-to-fit`
   */
  MozStackSizing?: Property.MozStackSizing;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   */
  MozTabSize?: Property.TabSize<TLength>;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  MozTextSizeAdjust?: Property.TextSizeAdjust;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  MozTransformOrigin?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   */
  MozTransformStyle?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  MozTransitionDelay?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  MozTransitionDuration?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  MozTransitionProperty?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  MozTransitionTimingFunction?: Property.TransitionTimingFunction;
  /**
   * The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.
   *
   * **Initial value**: `none`
   */
  MozUserFocus?: Property.MozUserFocus;
  /**
   * The **`user-modify`** property has no effect in Firefox. It was originally planned to??determine whether or not the content of an element can be edited by a user.
   *
   * **Initial value**: `read-only`
   */
  MozUserModify?: Property.MozUserModify;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   */
  MozUserSelect?: Property.UserSelect;
  /**
   * The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
   *
   * **Initial value**: `drag`
   */
  MozWindowDragging?: Property.MozWindowDragging;
  /**
   * The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.
   *
   * **Initial value**: `false`
   */
  msAccelerator?: Property.MsAccelerator;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   */
  msAlignSelf?: Property.AlignSelf;
  /**
   * The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.
   *
   * **Initial value**: `tb`
   */
  msBlockProgression?: Property.MsBlockProgression;
  /**
   * The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.
   *
   * **Initial value**: `none`
   */
  msContentZoomChaining?: Property.MsContentZoomChaining;
  /**
   * The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.
   *
   * **Initial value**: `400%`
   */
  msContentZoomLimitMax?: Property.MsContentZoomLimitMax;
  /**
   * The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.
   *
   * **Initial value**: `100%`
   */
  msContentZoomLimitMin?: Property.MsContentZoomLimitMin;
  /**
   * The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.
   *
   * **Initial value**: `snapInterval(0%, 100%)`
   */
  msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints;
  /**
   * The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.
   *
   * **Initial value**: `none`
   */
  msContentZoomSnapType?: Property.MsContentZoomSnapType;
  /**
   * The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.
   *
   * **Initial value**: zoom for the top level element, none for all other elements
   */
  msContentZooming?: Property.MsContentZooming;
  /**
   * The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.
   *
   * **Initial value**: "" (the empty string)
   */
  msFilter?: Property.MsFilter;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   */
  msFlexDirection?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   */
  msFlexPositive?: Property.FlexGrow;
  /**
   * The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.
   *
   * **Initial value**: `none`
   */
  msFlowFrom?: Property.MsFlowFrom;
  /**
   * The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.
   *
   * **Initial value**: `none`
   */
  msFlowInto?: Property.MsFlowInto;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Initial value**: `auto`
   */
  msGridColumns?: Property.GridAutoColumns<TLength>;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track??or pattern of tracks.
   *
   * **Initial value**: `auto`
   */
  msGridRows?: Property.GridAutoRows<TLength>;
  /**
   * The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.
   *
   * **Initial value**: `auto`
   */
  msHighContrastAdjust?: Property.MsHighContrastAdjust;
  /**
   * The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.
   *
   * **Initial value**: `auto`
   */
  msHyphenateLimitChars?: Property.MsHyphenateLimitChars;
  /**
   * The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.
   *
   * **Initial value**: `no-limit`
   */
  msHyphenateLimitLines?: Property.MsHyphenateLimitLines;
  /**
   * The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.
   *
   * **Initial value**: `0`
   */
  msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  msHyphens?: Property.Hyphens;
  /**
   * The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer??11.
   *
   * **Initial value**: `auto`
   */
  msImeAlign?: Property.MsImeAlign;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   */
  msLineBreak?: Property.LineBreak;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   */
  msOrder?: Property.Order;
  /**
   * The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.
   *
   * **Initial value**: `auto`
   */
  msOverflowStyle?: Property.MsOverflowStyle;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   */
  msOverflowX?: Property.OverflowX;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   */
  msOverflowY?: Property.OverflowY;
  /**
   * The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.
   *
   * **Initial value**: `chained`
   */
  msScrollChaining?: Property.MsScrollChaining;
  /**
   * The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.
   *
   * **Initial value**: `auto`
   */
  msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength>;
  /**
   * The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.
   *
   * **Initial value**: `0`
   */
  msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength>;
  /**
   * The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.
   *
   * **Initial value**: `auto`
   */
  msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength>;
  /**
   * The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.
   *
   * **Initial value**: `0`
   */
  msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength>;
  /**
   * The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.
   *
   * **Initial value**: `railed`
   */
  msScrollRails?: Property.MsScrollRails;
  /**
   * The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsX?: Property.MsScrollSnapPointsX;
  /**
   * The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsY?: Property.MsScrollSnapPointsY;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   */
  msScrollSnapType?: Property.MsScrollSnapType;
  /**
   * The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
   *
   * **Initial value**: `none`
   */
  msScrollTranslation?: Property.MsScrollTranslation;
  /**
   * The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: depends on user agent
   */
  msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor;
  /**
   * The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.
   *
   * **Initial value**: `ButtonText`
   */
  msScrollbarArrowColor?: Property.MsScrollbarArrowColor;
  /**
   * The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.
   *
   * **Initial value**: depends on user agent
   */
  msScrollbarBaseColor?: Property.MsScrollbarBaseColor;
  /**
   * The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor;
  /**
   * The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDFace`
   */
  msScrollbarFaceColor?: Property.MsScrollbarFaceColor;
  /**
   * The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDHighlight`
   */
  msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor;
  /**
   * The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarShadowColor?: Property.MsScrollbarShadowColor;
  /**
   * The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.
   *
   * **Initial value**: `Scrollbar`
   */
  msScrollbarTrackColor?: Property.MsScrollbarTrackColor;
  /**
   * The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.
   *
   * **Initial value**: `none`
   */
  msTextAutospace?: Property.MsTextAutospace;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   */
  msTextCombineHorizontal?: Property.TextCombineUpright;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   */
  msTextOverflow?: Property.TextOverflow;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Initial value**: `auto`
   */
  msTouchAction?: Property.TouchAction;
  /**
   * The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.
   *
   * **Initial value**: `grippers`
   */
  msTouchSelect?: Property.MsTouchSelect;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   */
  msTransform?: Property.Transform;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  msTransformOrigin?: Property.TransformOrigin<TLength>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  msTransitionDelay?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  msTransitionDuration?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  msTransitionProperty?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  msTransitionTimingFunction?: Property.TransitionTimingFunction;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `text`
   */
  msUserSelect?: Property.MsUserSelect;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   */
  msWordBreak?: Property.WordBreak;
  /**
   * The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.
   *
   * **Initial value**: `auto`
   */
  msWrapFlow?: Property.MsWrapFlow;
  /**
   * The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.
   *
   * **Initial value**: `0`
   */
  msWrapMargin?: Property.MsWrapMargin<TLength>;
  /**
   * The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.
   *
   * **Initial value**: `wrap`
   */
  msWrapThrough?: Property.MsWrapThrough;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   */
  msWritingMode?: Property.WritingMode;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   */
  OObjectFit?: Property.ObjectFit;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   */
  OObjectPosition?: Property.ObjectPosition<TLength>;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   */
  OTabSize?: Property.TabSize<TLength>;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   */
  OTextOverflow?: Property.TextOverflow;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  OTransformOrigin?: Property.TransformOrigin<TLength>;
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Initial value**: `normal`
   */
  WebkitAlignContent?: Property.AlignContent;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Initial value**: `normal`
   */
  WebkitAlignItems?: Property.AlignItems;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   */
  WebkitAlignSelf?: Property.AlignSelf;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDelay?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   */
  WebkitAnimationDirection?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDuration?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   */
  WebkitAnimationFillMode?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   */
  WebkitAnimationIterationCount?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   */
  WebkitAnimationName?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   */
  WebkitAnimationPlayState?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   */
  WebkitAnimationTimingFunction?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  WebkitAppearance?: Property.WebkitAppearance;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   */
  WebkitBackdropFilter?: Property.BackdropFilter;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   */
  WebkitBackfaceVisibility?: Property.BackfaceVisibility;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   */
  WebkitBackgroundClip?: Property.BackgroundClip;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   */
  WebkitBackgroundOrigin?: Property.BackgroundOrigin;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   */
  WebkitBackgroundSize?: Property.BackgroundSize<TLength>;
  /** **Initial value**: `currentcolor` */
  WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor;
  /** **Initial value**: `none` */
  WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle;
  /** **Initial value**: `medium` */
  WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Initial value**: `100%`
   */
  WebkitBorderImageSlice?: Property.BorderImageSlice;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   */
  WebkitBoxDecorationBreak?: Property.BoxDecorationBreak;
  /**
   * The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.
   *
   * **Initial value**: `none`
   */
  WebkitBoxReflect?: Property.WebkitBoxReflect<TLength>;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   */
  WebkitBoxShadow?: Property.BoxShadow;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   */
  WebkitBoxSizing?: Property.BoxSizing;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   */
  WebkitClipPath?: Property.ClipPath;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   */
  WebkitColorAdjust?: Property.ColorAdjust;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   */
  WebkitColumnCount?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   */
  WebkitColumnFill?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   */
  WebkitColumnGap?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   */
  WebkitColumnRuleColor?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   */
  WebkitColumnRuleStyle?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   */
  WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   */
  WebkitColumnSpan?: Property.ColumnSpan;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   */
  WebkitColumnWidth?: Property.ColumnWidth<TLength>;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   */
  WebkitFilter?: Property.Filter;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Initial value**: `auto`
   */
  WebkitFlexBasis?: Property.FlexBasis<TLength>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   */
  WebkitFlexDirection?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   */
  WebkitFlexGrow?: Property.FlexGrow;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Initial value**: `1`
   */
  WebkitFlexShrink?: Property.FlexShrink;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Initial value**: `nowrap`
   */
  WebkitFlexWrap?: Property.FlexWrap;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   */
  WebkitFontFeatureSettings?: Property.FontFeatureSettings;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   */
  WebkitFontKerning?: Property.FontKerning;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   */
  WebkitFontVariantLigatures?: Property.FontVariantLigatures;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  WebkitHyphens?: Property.Hyphens;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Initial value**: `normal`
   */
  WebkitJustifyContent?: Property.JustifyContent;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   */
  WebkitLineBreak?: Property.LineBreak;
  /**
   * The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.
   *
   * **Initial value**: `none`
   */
  WebkitLineClamp?: Property.WebkitLineClamp;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  WebkitMarginEnd?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  WebkitMarginStart?: Property.MarginInlineStart<TLength>;
  /**
   * If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   */
  WebkitMaskAttachment?: Property.WebkitMaskAttachment;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border`
   */
  WebkitMaskClip?: Property.WebkitMaskClip;
  /**
   * The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.
   *
   * **Initial value**: `source-over`
   */
  WebkitMaskComposite?: Property.WebkitMaskComposite;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   */
  WebkitMaskImage?: Property.WebkitMaskImage;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Initial value**: `padding`
   */
  WebkitMaskOrigin?: Property.WebkitMaskOrigin;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `0% 0%`
   */
  WebkitMaskPosition?: Property.WebkitMaskPosition<TLength>;
  /**
   * The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength>;
  /**
   * The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeat?: Property.WebkitMaskRepeat;
  /**
   * The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatX?: Property.WebkitMaskRepeatX;
  /**
   * The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatY?: Property.WebkitMaskRepeatY;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto auto`
   */
  WebkitMaskSize?: Property.WebkitMaskSize<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   */
  WebkitMaxInlineSize?: Property.MaxInlineSize<TLength>;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   */
  WebkitOrder?: Property.Order;
  /**
   * The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.
   *
   * **Initial value**: `auto`
   */
  WebkitOverflowScrolling?: Property.WebkitOverflowScrolling;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  WebkitPaddingStart?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   */
  WebkitPerspective?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   */
  WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength>;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   */
  WebkitScrollSnapType?: Property.ScrollSnapType;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   */
  WebkitShapeMargin?: Property.ShapeMargin<TLength>;
  /**
   * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user??that their tap is being successfully recognized, and indicates which element they're tapping on.
   *
   * **Initial value**: `black`
   */
  WebkitTapHighlightColor?: Property.WebkitTapHighlightColor;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   */
  WebkitTextCombine?: Property.TextCombineUpright;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextDecorationColor?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   */
  WebkitTextDecorationLine?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element???s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   */
  WebkitTextDecorationSkip?: Property.TextDecorationSkip;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   */
  WebkitTextDecorationStyle?: Property.TextDecorationStyle;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextEmphasisColor?: Property.TextEmphasisColor;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Initial value**: `over right`
   */
  WebkitTextEmphasisPosition?: Property.TextEmphasisPosition;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   */
  WebkitTextEmphasisStyle?: Property.TextEmphasisStyle;
  /**
   * The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextFillColor?: Property.WebkitTextFillColor;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   */
  WebkitTextOrientation?: Property.TextOrientation;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  WebkitTextSizeAdjust?: Property.TextSizeAdjust;
  /**
   * The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextStrokeColor?: Property.WebkitTextStrokeColor;
  /**
   * The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.
   *
   * **Initial value**: `0`
   */
  WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength>;
  /**
   * The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.
   *
   * **Initial value**: `default`
   */
  WebkitTouchCallout?: Property.WebkitTouchCallout;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   */
  WebkitTransform?: Property.Transform;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  WebkitTransformOrigin?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   */
  WebkitTransformStyle?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDelay?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDuration?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  WebkitTransitionProperty?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  WebkitTransitionTimingFunction?: Property.TransitionTimingFunction;
  /** **Initial value**: `read-only` */
  WebkitUserModify?: Property.WebkitUserModify;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   */
  WebkitUserSelect?: Property.UserSelect;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   */
  WebkitWritingMode?: Property.WritingMode;
}

export interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /** The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`. */
  MozAnimation?: Property.Animation<TTime>;
  /** The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border. */
  MozBorderImage?: Property.BorderImage;
  /** The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout. */
  MozColumnRule?: Property.ColumnRule<TLength>;
  /** The **`columns`** CSS property sets the column width and column count of an element. */
  MozColumns?: Property.Columns<TLength>;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  MozTransition?: Property.Transition<TTime>;
  /** The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties. */
  msContentZoomLimit?: Property.MsContentZoomLimit;
  /** The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties. */
  msContentZoomSnap?: Property.MsContentZoomSnap;
  /** The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. */
  msFlex?: Property.Flex<TLength>;
  /** The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties. */
  msScrollLimit?: Property.MsScrollLimit;
  /** The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties. */
  msScrollSnapX?: Property.MsScrollSnapX;
  /** The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties. */
  msScrollSnapY?: Property.MsScrollSnapY;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  msTransition?: Property.Transition<TTime>;
  /** The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`. */
  WebkitAnimation?: Property.Animation<TTime>;
  /** The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. */
  WebkitBorderBefore?: Property.WebkitBorderBefore<TLength>;
  /** The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border. */
  WebkitBorderImage?: Property.BorderImage;
  /** The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners. */
  WebkitBorderRadius?: Property.BorderRadius<TLength>;
  /** The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout. */
  WebkitColumnRule?: Property.ColumnRule<TLength>;
  /** The **`columns`** CSS property sets the column width and column count of an element. */
  WebkitColumns?: Property.Columns<TLength>;
  /** The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. */
  WebkitFlex?: Property.Flex<TLength>;
  /** The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties. */
  WebkitFlexFlow?: Property.FlexFlow;
  /** The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points. */
  WebkitMask?: Property.WebkitMask<TLength>;
  /** The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`. */
  WebkitTextEmphasis?: Property.TextEmphasis;
  /** The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`. */
  WebkitTextStroke?: Property.WebkitTextStroke<TLength>;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  WebkitTransition?: Property.Transition<TTime>;
}

export interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {}

export interface ObsoleteProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  boxAlign?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxFlexGroup?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  boxLines?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxOrdinalGroup?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  boxOrient?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: Property.BoxPack;
  /**
   * The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: Property.Clip;
  /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  fontVariantAlternates?: Property.FontVariantAlternates;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: Property.GridColumnGap<TLength>;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * @deprecated
   */
  gridGap?: Property.GridGap<TLength>;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: Property.GridRowGap<TLength>;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: Property.ImeMode;
  /**
   * The **`inset-block`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlock?: Property.InsetBlock<TLength>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockEnd?: Property.InsetBlockEnd<TLength>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockStart?: Property.InsetBlockStart<TLength>;
  /**
   * The **`inset-inline`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInline?: Property.InsetInline<TLength>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineEnd?: Property.InsetInlineEnd<TLength>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineStart?: Property.InsetInlineStart<TLength>;
  /**
   * The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: Property.ScrollSnapCoordinate<TLength>;
  /**
   * The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.
   *
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: Property.ScrollSnapDestination<TLength>;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: Property.ScrollSnapPointsX;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: Property.ScrollSnapPointsY;
  /**
   * The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: Property.ScrollSnapTypeX;
  /**
   * The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: Property.ScrollSnapTypeY;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  textCombineHorizontal?: Property.TextCombineUpright;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  KhtmlBoxAlign?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxFlexGroup?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  KhtmlBoxLines?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  KhtmlBoxOrient?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: Property.BoxPack;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlLineBreak?: Property.LineBreak;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  KhtmlOpacity?: Property.Opacity;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlUserSelect?: Property.UserSelect;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   *
   * @deprecated
   */
  MozBackgroundClip?: Property.BackgroundClip;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  MozBackgroundInlinePolicy?: Property.BoxDecorationBreak;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   *
   * @deprecated
   */
  MozBackgroundOrigin?: Property.BackgroundOrigin;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: Property.BackgroundSize<TLength>;
  /**
   * The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBinding?: Property.MozBinding;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBorderBottomColors?: Property.MozBorderBottomColors;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBorderLeftColors?: Property.MozBorderLeftColors;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * @deprecated
   */
  MozBorderRadius?: Property.BorderRadius<TLength>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: Property.BorderTopRightRadius<TLength>;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBorderRightColors?: Property.MozBorderRightColors;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBorderTopColors?: Property.MozBorderTopColors;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  MozBoxAlign?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: Property.BoxFlex;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozBoxOrdinalGroup?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  MozBoxOrient?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: Property.BoxPack;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: Property.BoxShadow;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  MozOpacity?: Property.Opacity;
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * @deprecated
   */
  MozOutline?: Property.Outline<TLength>;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  MozOutlineColor?: Property.OutlineColor;
  /**
   * In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS property can be used to give an element's `outline` rounded corners.
   *
   * @deprecated
   */
  MozOutlineRadius?: Property.MozOutlineRadius<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: Property.OutlineStyle;
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: Property.OutlineWidth<TLength>;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: Property.TextAlignLast;
  /**
   * The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextBlink?: Property.MozTextBlink;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: Property.TextDecorationStyle;
  /**
   * In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozUserInput?: Property.MozUserInput;
  /**
   * The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
   *
   * **Initial value**: `default`
   *
   * @deprecated
   */
  MozWindowShadow?: Property.MozWindowShadow;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: Property.ImeMode;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * @deprecated
   */
  OAnimation?: Property.Animation<TTime>;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: Property.AnimationTimingFunction;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  OBackgroundSize?: Property.BackgroundSize<TLength>;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * @deprecated
   */
  OBorderImage?: Property.BorderImage;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: Property.Transform;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * @deprecated
   */
  OTransition?: Property.Transition<TTime>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: Property.TransitionTimingFunction;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  WebkitBoxAlign?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxFlexGroup?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  WebkitBoxLines?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  WebkitBoxOrient?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: Property.BoxPack;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsX?: Property.ScrollSnapPointsX;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsY?: Property.ScrollSnapPointsY;
}

export interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  alignmentBaseline?: Property.AlignmentBaseline;
  baselineShift?: Property.BaselineShift<TLength>;
  clip?: Property.Clip;
  clipPath?: Property.ClipPath;
  clipRule?: Property.ClipRule;
  color?: Property.Color;
  colorInterpolation?: Property.ColorInterpolation;
  colorRendering?: Property.ColorRendering;
  cursor?: Property.Cursor;
  direction?: Property.Direction;
  display?: Property.Display;
  dominantBaseline?: Property.DominantBaseline;
  fill?: Property.Fill;
  fillOpacity?: Property.FillOpacity;
  fillRule?: Property.FillRule;
  filter?: Property.Filter;
  floodColor?: Property.FloodColor;
  floodOpacity?: Property.FloodOpacity;
  font?: Property.Font;
  fontFamily?: Property.FontFamily;
  fontSize?: Property.FontSize<TLength>;
  fontSizeAdjust?: Property.FontSizeAdjust;
  fontStretch?: Property.FontStretch;
  fontStyle?: Property.FontStyle;
  fontVariant?: Property.FontVariant;
  fontWeight?: Property.FontWeight;
  glyphOrientationVertical?: Property.GlyphOrientationVertical;
  imageRendering?: Property.ImageRendering;
  letterSpacing?: Property.LetterSpacing<TLength>;
  lightingColor?: Property.LightingColor;
  lineHeight?: Property.LineHeight<TLength>;
  marker?: Property.Marker;
  markerEnd?: Property.MarkerEnd;
  markerMid?: Property.MarkerMid;
  markerStart?: Property.MarkerStart;
  mask?: Property.Mask<TLength>;
  opacity?: Property.Opacity;
  overflow?: Property.Overflow;
  paintOrder?: Property.PaintOrder;
  pointerEvents?: Property.PointerEvents;
  shapeRendering?: Property.ShapeRendering;
  stopColor?: Property.StopColor;
  stopOpacity?: Property.StopOpacity;
  stroke?: Property.Stroke;
  strokeDasharray?: Property.StrokeDasharray<TLength>;
  strokeDashoffset?: Property.StrokeDashoffset<TLength>;
  strokeLinecap?: Property.StrokeLinecap;
  strokeLinejoin?: Property.StrokeLinejoin;
  strokeMiterlimit?: Property.StrokeMiterlimit;
  strokeOpacity?: Property.StrokeOpacity;
  strokeWidth?: Property.StrokeWidth<TLength>;
  textAnchor?: Property.TextAnchor;
  textDecoration?: Property.TextDecoration<TLength>;
  textRendering?: Property.TextRendering;
  unicodeBidi?: Property.UnicodeBidi;
  vectorEffect?: Property.VectorEffect;
  visibility?: Property.Visibility;
  whiteSpace?: Property.WhiteSpace;
  wordSpacing?: Property.WordSpacing<TLength>;
  writingMode?: Property.WritingMode;
}

export interface Properties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardProperties<TLength, TTime>,
    VendorProperties<TLength, TTime>,
    ObsoleteProperties<TLength, TTime>,
    SvgProperties<TLength, TTime> {}

export interface StandardLonghandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: Property.AlignContent;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **52**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: Property.AlignItems;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **36**  | **20**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: Property.AlignSelf;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: Property.Appearance;
  /**
   * The **`aspect-ratio`**  ?? CSS property sets a _**preferred aspect ratio**_ for the box, which will be used in the calculation of auto sizes and some other layout functions.
   *
   * **Initial value**: `auto`
   */
  "aspect-ratio"?: Property.AspectRatio;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **76** |   n/a   | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: Property.BackdropFilter;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
   * | :------: | :------: | :-----------: | :----: | :----: |
   * |  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |               |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: Property.BackfaceVisibility;
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: Property.BackgroundAttachment;
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: Property.BackgroundBlendMode;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |  IE   |
   * | :----: | :-----: | :---------: | :----: | :---: |
   * | **1**  |  **4**  | **3** _-x-_ | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: Property.BackgroundClip;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: Property.BackgroundColor;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: Property.BackgroundImage;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: Property.BackgroundOrigin;
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: Property.BackgroundPosition<TLength>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: Property.BackgroundPositionX<TLength>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: Property.BackgroundPositionY<TLength>;
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: Property.BackgroundRepeat;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: Property.BackgroundSize<TLength>;
  /** **Initial value**: `clip` */
  "block-overflow"?: Property.BlockOverflow;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: Property.BlockSize<TLength>;
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block??borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and??`border-bottom-color`, or `border-right-color` and??`border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  "border-block-color"?: Property.BorderBlockColor;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: Property.BorderBlockEndColor;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: Property.BorderBlockEndStyle;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: Property.BorderBlockEndWidth<TLength>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: Property.BorderBlockStartColor;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: Property.BorderBlockStartStyle;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: Property.BorderBlockStartWidth<TLength>;
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and??`border-bottom-style`, or??`border-left-style` and??`border-right-style` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  "border-block-style"?: Property.BorderBlockStyle;
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block??borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and??`border-bottom-width`, or `border-left-width`, and??`border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  "border-block-width"?: Property.BorderBlockWidth<TLength>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: Property.BorderBottomColor;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: Property.BorderBottomStyle;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: Property.BorderBottomWidth<TLength>;
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: Property.BorderCollapse;
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  "border-end-end-radius"?: Property.BorderEndEndRadius<TLength>;
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius??depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  "border-end-start-radius"?: Property.BorderEndStartRadius<TLength>;
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: Property.BorderImageOutset<TLength>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: Property.BorderImageRepeat;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: Property.BorderImageSlice;
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: Property.BorderImageSource;
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: Property.BorderImageWidth<TLength>;
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline??borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and??`border-bottom-color`, or `border-right-color` and??`border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  "border-inline-color"?: Property.BorderInlineColor;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: Property.BorderInlineEndColor;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-style)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: Property.BorderInlineEndStyle;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  | Edge | IE  |
   * | :----: | :-------------------------: | :------: | :--: | :-: |
   * | **69** |           **41**            | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: Property.BorderInlineEndWidth<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: Property.BorderInlineStartColor;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |            Firefox            |  Safari  | Edge | IE  |
   * | :----: | :---------------------------: | :------: | :--: | :-: |
   * | **69** |            **41**             | **12.1** |  No  | No  |
   * |        | 3 _(-moz-border-start-style)_ |          |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: Property.BorderInlineStartStyle;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: Property.BorderInlineStartWidth<TLength>;
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline??borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and??`border-bottom-style`, or??`border-left-style` and??`border-right-style` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  "border-inline-style"?: Property.BorderInlineStyle;
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline??borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and??`border-bottom-width`, or `border-left-width`, and??`border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  "border-inline-width"?: Property.BorderInlineWidth<TLength>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: Property.BorderLeftColor;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: Property.BorderLeftStyle;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: Property.BorderLeftWidth<TLength>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: Property.BorderRightColor;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: Property.BorderRightStyle;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: Property.BorderRightWidth<TLength>;
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: Property.BorderSpacing<TLength>;
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius??depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  "border-start-end-radius"?: Property.BorderStartEndRadius<TLength>;
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  "border-start-start-radius"?: Property.BorderStartStartRadius<TLength>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: Property.BorderTopColor;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: Property.BorderTopRightRadius<TLength>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: Property.BorderTopStyle;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: Property.BorderTopWidth<TLength>;
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: Property.Bottom<TLength>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  "box-decoration-break"?: Property.BoxDecorationBreak;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: Property.BoxShadow;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: Property.BoxSizing;
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: Property.BreakAfter;
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: Property.BreakBefore;
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: Property.BreakInside;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: Property.CaptionSide;
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: Property.CaretColor;
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: Property.Clear;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **55**  | **3.5** |  **9.1**  | **12** | **10** |
   * | 23 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: Property.ClipPath;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: Property.Color;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  "color-adjust"?: Property.ColorAdjust;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :------: | :-----: | :----: | :----: |
   * | **50** |  **52**  |  **9**  | **12** | **10** |
   * |        | 13 _-x-_ | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |   No   | **63**  | **3** _-x-_ |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   | **10**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **50**  | **71**  |   **9**   | **12** | **10** |
   * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: Property.ColumnSpan;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **50**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: Property.ColumnWidth<TLength>;
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  contain?: Property.Contain;
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: Property.Content;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: Property.CounterIncrement;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: Property.CounterReset;
  /**
   * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will??only create new counters if there isn't already a counter of the given name on the element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-set
   */
  "counter-set"?: Property.CounterSet;
  /**
   * The **`cursor`** CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: Property.Cursor;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: Property.Direction;
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout,??grid or flex.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: Property.Display;
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: Property.EmptyCells;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: Property.Filter;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: Property.FlexBasis<TLength>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |            IE            |
   * | :------: | :-----: | :-------: | :----: | :----------------------: |
   * |  **29**  | **20**  |   **9**   | **12** |          **11**          |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: Property.FlexGrow;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 21 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: Property.FlexShrink;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: Property.FlexWrap;
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: Property.Float;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: Property.FontFamily;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: Property.FontFeatureSettings;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: Property.FontKerning;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: Property.FontLanguageOverride;
  /**
   * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **79** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  "font-optical-sizing"?: Property.FontOpticalSizing;
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: Property.FontSize<TLength>;
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **54** |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: Property.FontSizeAdjust;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **60** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: Property.FontStretch;
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: Property.FontStyle;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: Property.FontSynthesis;
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: Property.FontVariant;
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: Property.FontVariantCaps;
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: Property.FontVariantEastAsian;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: Property.FontVariantLigatures;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: Property.FontVariantNumeric;
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: Property.FontVariantPosition;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: Property.FontVariationSettings;
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` you are using.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: Property.FontWeight;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: Property.GridAutoColumns<TLength>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: Property.GridAutoFlow;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track??or pattern of tracks.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: Property.GridAutoRows<TLength>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item???s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: Property.GridColumnEnd;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item???s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: Property.GridColumnStart;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item???s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: Property.GridRowEnd;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item???s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: Property.GridRowStart;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: Property.GridTemplateAreas;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: Property.GridTemplateColumns<TLength>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: Property.GridTemplateRows<TLength>;
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **10** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  "hanging-punctuation"?: Property.HangingPunctuation;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: Property.Height<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     |     Edge     |      IE      |
   * | :------: | :-----: | :-----------: | :----------: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: Property.Hyphens;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: Property.ImageOrientation;
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **13** | **3.6** | **6**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: Property.ImageRendering;
  /** **Initial value**: `1dppx` */
  "image-resolution"?: Property.ImageResolution;
  /**
   * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: Property.InitialLetter;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: Property.InlineSize<TLength>;
  /**
   * The **`inset`**??CSS property, though part of the logical specification, doesn't define logical block or inline offsets, and instead defines physical offsets, regardless of the element's writing mode, directionality, and text orientation. It has the same multi-value syntax of the `margin` shorthand. It is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  inset?: Property.Inset<TLength>;
  /**
   * The **`inset-block`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  "inset-block"?: Property.InsetBlock<TLength>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  "inset-block-end"?: Property.InsetBlockEnd<TLength>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  "inset-block-start"?: Property.InsetBlockStart<TLength>;
  /**
   * The **`inset-inline`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  "inset-inline"?: Property.InsetInline<TLength>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  "inset-inline-end"?: Property.InsetInlineEnd<TLength>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  "inset-inline-start"?: Property.InsetInlineStart<TLength>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: Property.Isolation;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **52**  | **20**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: Property.JustifyContent;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: Property.JustifyItems;
  /**
   * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: Property.JustifySelf;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: Property.Left<TLength>;
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: Property.LetterSpacing<TLength>;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE    |
   * | :-----: | :-----: | :---------: | :----: | :-----: |
   * | **58**  | **69**  | **3** _-x-_ | **14** | **5.5** |
   * | 1 _-x-_ |         |             |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: Property.LineBreak;
  /**
   * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: Property.LineHeight<TLength>;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
   */
  "line-height-step"?: Property.LineHeightStep<TLength>;
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: Property.ListStyleImage;
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: Property.ListStylePosition;
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: Property.ListStyleType;
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  "margin-block"?: Property.MarginBlock<TLength>;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: Property.MarginBlockEnd<TLength>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: Property.MarginBlockStart<TLength>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: Property.MarginBottom<TLength>;
  /**
   * The **`margin-inline`**??CSS property defines the logical inline??start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  "margin-inline"?: Property.MarginInline<TLength>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         |  No  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
   * |           **69**           |         **41**          |          **12.1**          |  No  | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: Property.MarginInlineStart<TLength>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: Property.MarginLeft<TLength>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: Property.MarginRight<TLength>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  "margin-top"?: Property.MarginTop<TLength>;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   * **Initial value**: `alpha`
   */
  "mask-border-mode"?: Property.MaskBorderMode;
  /**
   * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
   *
   * **Initial value**: `0`
   */
  "mask-border-outset"?: Property.MaskBorderOutset<TLength>;
  /**
   * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
   *
   * **Initial value**: `stretch`
   */
  "mask-border-repeat"?: Property.MaskBorderRepeat;
  /**
   * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
   *
   * **Initial value**: `0`
   */
  "mask-border-slice"?: Property.MaskBorderSlice;
  /**
   * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
   *
   * **Initial value**: `none`
   */
  "mask-border-source"?: Property.MaskBorderSource;
  /**
   * The **`mask-border-width`** CSS property sets the width of an element's mask border.
   *
   * **Initial value**: `auto`
   */
  "mask-border-width"?: Property.MaskBorderWidth<TLength>;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: Property.MaskClip;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **53**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: Property.MaskComposite;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: Property.MaskImage;
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: Property.MaskMode;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: Property.MaskOrigin;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
   * | :---------: | :-----: | :-----------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: Property.MaskPosition<TLength>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  | IE  |
   * | :---------: | :-----: | :-----------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: Property.MaskRepeat;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: Property.MaskSize<TLength>;
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **24** | **35**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: Property.MaskType;
  /**
   * The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
   */
  "max-block-size"?: Property.MaxBlockSize<TLength>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: Property.MaxHeight<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |   Safari   | Edge | IE  |
   * | :----: | :-----: | :--------: | :--: | :-: |
   * | **57** | **41**  |  **12.1**  |  No  | No  |
   * |        |         | 10.1 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: Property.MaxInlineSize<TLength>;
  /** **Initial value**: `none` */
  "max-lines"?: Property.MaxLines;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: Property.MaxWidth<TLength>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: Property.MinBlockSize<TLength>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: Property.MinHeight<TLength>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: Property.MinInlineSize<TLength>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: Property.MinWidth<TLength>;
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: Property.MixBlendMode;
  /**
   * The??**`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: Property.OffsetDistance<TLength>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: Property.OffsetPath;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: Property.OffsetRotate;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: Property.ObjectFit;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: Property.ObjectPosition<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **79** |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
   */
  "offset-anchor"?: Property.OffsetAnchor<TLength>;
  /**
   * The??**`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: Property.OffsetDistance<TLength>;
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: Property.OffsetPath;
  /** **Initial value**: `auto` */
  "offset-position"?: Property.OffsetPosition<TLength>;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: Property.OffsetRotate;
  /**
   * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: Property.OffsetRotate;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: Property.Opacity;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: Property.Order;
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: Property.Orphans;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: Property.OutlineColor;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: Property.OutlineOffset<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: Property.OutlineStyle;
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: Property.OutlineWidth<TLength>;
  /**
   * The **`overflow`** shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: Property.Overflow;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **56** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  "overflow-anchor"?: Property.OverflowAnchor;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
   */
  "overflow-block"?: Property.OverflowBlock;
  /**
   * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **29**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Mozilla/CSS/overflow-clip-box
   */
  "overflow-clip-box"?: Property.OverflowClipBox;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **69**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
   */
  "overflow-inline"?: Property.OverflowInline;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: Property.OverflowWrap;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: Property.OverflowX;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: Property.OverflowY;
  /**
   * The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: Property.OverscrollBehavior;
  /**
   * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: Property.OverscrollBehaviorX;
  /**
   * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  |   No   | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: Property.OverscrollBehaviorY;
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding??of an element, which maps to physical padding properties??depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  "padding-block"?: Property.PaddingBlock<TLength>;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: Property.PaddingBlockEnd<TLength>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: Property.PaddingBlockStart<TLength>;
  /**
   * The **`padding-bottom`** CSS property??sets the height of the??padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: Property.PaddingBottom<TLength>;
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding??of an element, which maps to physical padding properties??depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  "padding-inline"?: Property.PaddingInline<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          |  No  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
   * |           **69**            |          **41**          |          **12.1**           |  No  | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`padding-left`**??CSS property??sets the width of the??padding area??to??the left of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: Property.PaddingLeft<TLength>;
  /**
   * The **`padding-right`** CSS property??sets the width of the??padding area on the right of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: Property.PaddingRight<TLength>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: Property.PaddingTop<TLength>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: Property.PageBreakAfter;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: Property.PageBreakBefore;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: Property.PageBreakInside;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **60**  | **8**  | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: Property.PaintOrder;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: Property.PerspectiveOrigin<TLength>;
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It??can be used in any layout method which utilizes both of these alignment values.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **9**  |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **53**  | **11** |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: Property.PlaceContent;
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: Property.PointerEvents;
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: Property.Position;
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: Property.Quotes;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |  **4**  | **3**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: Property.Resize;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: Property.Right<TLength>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: Property.Rotate;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  "row-gap"?: Property.RowGap<TLength>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: Property.RubyAlign;
  /** **Initial value**: `separate` */
  "ruby-merge"?: Property.RubyMerge;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: Property.RubyPosition;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: Property.Scale;
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **61** | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: Property.ScrollBehavior;
  /**
   * The **`scroll-margin`** property is a shorthand??property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  "scroll-margin"?: Property.ScrollMargin<TLength>;
  /**
   * The `scroll-margin-block`??property is a shorthand??property which sets the scroll-margin??longhands in the block dimension.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  "scroll-margin-block"?: Property.ScrollMarginBlock<TLength>;
  /**
   * The `scroll-margin-block-end`??property defines the??margin of??the scroll snap area at the end??of the block dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  "scroll-margin-block-end"?: Property.ScrollMarginBlockEnd<TLength>;
  /**
   * The `scroll-margin-block-start`??property defines the??margin of??the scroll snap area at the start of the block dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  "scroll-margin-block-start"?: Property.ScrollMarginBlockStart<TLength>;
  /**
   * The `scroll-margin-bottom`??property defines the bottom??margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  "scroll-margin-bottom"?: Property.ScrollMarginBottom<TLength>;
  /**
   * The `scroll-margin-inline`??property is a shorthand??property which sets the scroll-margin??longhands in the inline??dimension.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
  "scroll-margin-inline"?: Property.ScrollMarginInline<TLength>;
  /**
   * The `scroll-margin-inline-end`??property defines the??margin of??the scroll snap area at the end??of the inline??dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  "scroll-margin-inline-end"?: Property.ScrollMarginInlineEnd<TLength>;
  /**
   * The `scroll-margin-inline-start`??property defines the??margin of??the scroll snap area at the start of the inline??dimension??that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  "scroll-margin-inline-start"?: Property.ScrollMarginInlineStart<TLength>;
  /**
   * The `scroll-margin-left`??property defines the left margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  "scroll-margin-left"?: Property.ScrollMarginLeft<TLength>;
  /**
   * The `scroll-margin-right`??property defines the right??margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  "scroll-margin-right"?: Property.ScrollMarginRight<TLength>;
  /**
   * The `scroll-margin-top`??property defines the top margin of??the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container???s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  "scroll-margin-top"?: Property.ScrollMarginTop<TLength>;
  /**
   * The **`scroll-padding`** property is a shorthand property that sets all of the `scroll-padding-*` longhands. It assigns values much like the `padding` property does for the `padding-*` longhands.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  "scroll-padding"?: Property.ScrollPadding<TLength>;
  /**
   * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  "scroll-padding-block"?: Property.ScrollPaddingBlock<TLength>;
  /**
   * The `scroll-padding-block-end`??property??defines offsets for the end??edge in the block??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  "scroll-padding-block-end"?: Property.ScrollPaddingBlockEnd<TLength>;
  /**
   * The `scroll-padding-block-start`??property??defines offsets for the start edge in the block??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  "scroll-padding-block-start"?: Property.ScrollPaddingBlockStart<TLength>;
  /**
   * The `scroll-padding-bottom`??property??defines offsets for the bottom??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  "scroll-padding-bottom"?: Property.ScrollPaddingBottom<TLength>;
  /**
   * The `scroll-padding-inline`??property is a shorthand??property which sets??the scroll-padding longhands for the inline??dimension.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  "scroll-padding-inline"?: Property.ScrollPaddingInline<TLength>;
  /**
   * The `scroll-padding-inline-end`??property??defines offsets for the end??edge in the inline??dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  "scroll-padding-inline-end"?: Property.ScrollPaddingInlineEnd<TLength>;
  /**
   * The `scroll-padding-inline-start`??property??defines offsets for the start edge in the inline dimension??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  "scroll-padding-inline-start"?: Property.ScrollPaddingInlineStart<TLength>;
  /**
   * The `scroll-padding-left`??property??defines offsets for the left??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  "scroll-padding-left"?: Property.ScrollPaddingLeft<TLength>;
  /**
   * The `scroll-padding-right`??property??defines offsets for the right??of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  "scroll-padding-right"?: Property.ScrollPaddingRight<TLength>;
  /**
   * The `scroll-padding-top` property??defines offsets for the top of the??optimal viewing region??of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  "scroll-padding-top"?: Property.ScrollPaddingTop<TLength>;
  /**
   * The `scroll-snap-align` property specifies the box???s snap position as an alignment of its snap area (as the alignment subject) within its snap container???s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **68**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  "scroll-snap-align"?: Property.ScrollSnapAlign;
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **75** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
  "scroll-snap-stop"?: Property.ScrollSnapStop;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |     Edge     |      IE      |
   * | :----: | :-----: | :-----: | :----------: | :----------: |
   * | **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |
   * |        |         | 9 _-x-_ |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: Property.ScrollSnapType;
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  "scrollbar-color"?: Property.ScrollbarColor;
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element???s scrollbars when they are shown.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **64**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
  "scrollbar-width"?: Property.ScrollbarWidth;
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: Property.ShapeImageThreshold;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: Property.ShapeMargin<TLength>;
  /**
   * The **`shape-outside`** CSS property defines a shape???which may be non-rectangular???around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: Property.ShapeOutside;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: Property.TabSize<TLength>;
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: Property.TableLayout;
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a??block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: Property.TextAlign;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  |   No   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: Property.TextAlignLast;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * |           Chrome           | Firefox |              Safari              |                  Edge                  |                   IE                   |
   * | :------------------------: | :-----: | :------------------------------: | :------------------------------------: | :------------------------------------: |
   * |           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | **12** _(-ms-text-combine-horizontal)_ | **11** _(-ms-text-combine-horizontal)_ |
   * | 9 _(-webkit-text-combine)_ |         |                                  |                                        |                                        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: Property.TextCombineUpright;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element???s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: Property.TextDecorationSkip;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **70**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: Property.TextDecorationSkipInk;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: Property.TextDecorationStyle;
  /**
   * The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  "text-decoration-thickness"?: Property.TextDecorationThickness<TLength>;
  /**
   * The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
   */
  "text-decoration-width"?: Property.TextDecorationThickness<TLength>;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: Property.TextEmphasisColor;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: Property.TextEmphasisPosition;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: Property.TextEmphasisStyle;
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: Property.TextIndent<TLength>;
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: Property.TextJustify;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * |  Chrome  | Firefox |    Safari     | Edge | IE  |
   * | :------: | :-----: | :-----------: | :--: | :-: |
   * |  **48**  | **41**  | **5.1** _-x-_ |  No  | No  |
   * | 11 _-x-_ |         |               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: Property.TextOrientation;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: Property.TextOverflow;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **1**  | **5**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: Property.TextRendering;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: Property.TextShadow;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: Property.TextSizeAdjust;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: Property.TextTransform;
  /**
   * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   | **70**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
   */
  "text-underline-offset"?: Property.TextUnderlineOffset<TLength>;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: Property.TextUnderlinePosition;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: Property.Top<TLength>;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: Property.TouchAction;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
   * | :-----: | :-----: | :-------: | :----: | :-----: |
   * | **36**  | **16**  |   **9**   | **12** | **10**  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: Property.Transform;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: Property.TransformBox;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
   * | :-----: | :-------: | :-----: | :----: | :-----: |
   * | **36**  |  **16**   |  **9**  | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
   * | :------: | :------: | :-----: | :----: | :-: |
   * |  **36**  |  **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: Property.TransitionTimingFunction;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: Property.Translate<TLength>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: Property.UnicodeBidi;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |     Edge     |      IE      |
   * | :-----: | :-----: | :---------: | :----------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             |              |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: Property.UserSelect;
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: Property.VerticalAlign<TLength>;
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: Property.Visibility;
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: Property.WhiteSpace;
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: Property.Widows;
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: Property.Width<TLength>;
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: Property.WillChange;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: Property.WordBreak;
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: Property.WordSpacing<TLength>;
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **2**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: Property.WordWrap;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |     IE      |
   * | :-----: | :-----: | :-------: | :----: | :---------: |
   * | **48**  | **41**  | **10.1**  | **12** | **9** _-x-_ |
   * | 8 _-x-_ |         | 5.1 _-x-_ |        |             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: Property.WritingMode;
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: Property.ZIndex;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **1**  |   No    | **3.1** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: Property.Zoom;
}

export interface StandardShorthandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The `**all**` shorthand CSS property resets all of an element's properties (except `unicode-bidi` and `direction`). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **37** | **27**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Property.All;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: Property.Animation<TTime>;
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: Property.Background<TLength>;
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: Property.Border<TLength>;
  /**
   * The **`border-block`**??CSS property is a shorthand property for setting the individual logical block??border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  "border-block"?: Property.BorderBlock<TLength>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: Property.BorderBlockEnd<TLength>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: Property.BorderBlockStart<TLength>;
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: Property.BorderBottom<TLength>;
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: Property.BorderColor;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: Property.BorderImage;
  /**
   * The **`border-inline`**??CSS property is a shorthand property for setting the individual logical inline??border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  "border-inline"?: Property.BorderInline<TLength>;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: Property.BorderInlineEnd<TLength>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: Property.BorderInlineStart<TLength>;
  /**
   * The **`border-left`** shorthand CSS property set an element's left border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: Property.BorderLeft<TLength>;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: Property.BorderRadius<TLength>;
  /**
   * The **`border-right`** shorthand CSS property sets an element's right border. It sets the values of `border-right-width`, `border-right-style` and `border-right-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: Property.BorderRight<TLength>;
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: Property.BorderStyle;
  /**
   * The **`border-top`** shorthand CSS property set an element's top border. It sets the values of `border-top-width`, `border-top-style` and `border-top-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: Property.BorderTop<TLength>;
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: Property.BorderWidth<TLength>;
  /**
   * The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **50**  |  **52**   |  **9**  | **12** | **10** |
   * | 1 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: Property.ColumnRule<TLength>;
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        | 9 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: Property.Columns<TLength>;
  /**
   * The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  | **20**  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: Property.Flex<TLength>;
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: Property.FlexFlow;
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: Property.Font;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **66** | **61**  |   No   | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: Property.Gap<TLength>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`),??in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: Property.Grid;
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item???s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: Property.GridArea;
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: Property.GridColumn;
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item???s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: Property.GridRow;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: Property.GridTemplate;
  /** **Initial value**: `none` */
  "line-clamp"?: Property.LineClamp;
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: Property.ListStyle;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: Property.Margin<TLength>;
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  |  **2**  | **3.2** | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: Property.Mask<TLength>;
  /** The **`mask-border`** CSS property lets you create a mask along the edge of an element's border. */
  "mask-border"?: Property.MaskBorder;
  /**
   * The **`offset`** CSS??property is a shorthand property for animating an element along a defined path. It sets the values of `offset-position`, `offset-path`, `offset-distance`, `offset-rotate`, and `offset-anchor`.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     | **71**  |   No   |  No  | No  |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: Property.Offset<TLength>;
  /**
   * The **`offset`** CSS??property is a shorthand property for animating an element along a defined path. It sets the values of `offset-position`, `offset-path`, `offset-distance`, `offset-rotate`, and `offset-anchor`.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     | **71**  |   No   |  No  | No  |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: Property.Offset<TLength>;
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: Property.Outline<TLength>;
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: Property.Padding<TLength>;
  /**
   * The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **11** |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  | **11** |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  "place-items"?: Property.PlaceItems;
  /**
   * The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  "place-self"?: Property.PlaceSelf;
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: Property.TextDecoration<TLength>;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **25** | **46**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: Property.TextEmphasis;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: Property.Transition<TTime>;
}

export interface StandardPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandPropertiesHyphen<TLength, TTime>,
    StandardShorthandPropertiesHyphen<TLength, TTime> {}

export interface VendorLonghandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   */
  "-moz-animation-delay"?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   */
  "-moz-animation-direction"?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   */
  "-moz-animation-duration"?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   */
  "-moz-animation-fill-mode"?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   */
  "-moz-animation-iteration-count"?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   */
  "-moz-animation-name"?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   */
  "-moz-animation-play-state"?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   */
  "-moz-animation-timing-function"?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  "-moz-appearance"?: Property.MozAppearance;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   */
  "-moz-backface-visibility"?: Property.BackfaceVisibility;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   */
  "-moz-border-end-color"?: Property.BorderInlineEndColor;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   */
  "-moz-border-end-style"?: Property.BorderInlineEndStyle;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`,??`border-right-width`,??`border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   */
  "-moz-border-end-width"?: Property.BorderInlineEndWidth<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`,??`border-right-color`,??`border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   */
  "-moz-border-start-color"?: Property.BorderInlineStartColor;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`,??`border-right-style`,??`border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   */
  "-moz-border-start-style"?: Property.BorderInlineStartStyle;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   */
  "-moz-box-sizing"?: Property.BoxSizing;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   */
  "-moz-column-count"?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   */
  "-moz-column-fill"?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   */
  "-moz-column-gap"?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   */
  "-moz-column-rule-color"?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   */
  "-moz-column-rule-style"?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   */
  "-moz-column-rule-width"?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   */
  "-moz-column-width"?: Property.ColumnWidth<TLength>;
  /**
   * If you reference an SVG image in a webpage (such as with the `<img>` element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the **`-moz-context-properties`** property, and the image needs to opt in to using those properties by using values such as the `context-fill` value.
   *
   * **Initial value**: `none`
   */
  "-moz-context-properties"?: Property.MozContextProperties;
  /**
   * The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
   *
   * **Initial value**: `content-box`
   */
  "-moz-float-edge"?: Property.MozFloatEdge;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   */
  "-moz-font-feature-settings"?: Property.FontFeatureSettings;
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   */
  "-moz-font-language-override"?: Property.FontLanguageOverride;
  /**
   * The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.
   *
   * **Initial value**: `0`
   */
  "-moz-force-broken-image-icon"?: Property.MozForceBrokenImageIcon;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  "-moz-hyphens"?: Property.Hyphens;
  /**
   * For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.
   *
   * **Initial value**: `auto`
   */
  "-moz-image-region"?: Property.MozImageRegion;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-moz-margin-end"?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-moz-margin-start"?: Property.MarginInlineStart<TLength>;
  /**
   * The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.
   *
   * **Initial value**: `inline`
   */
  "-moz-orient"?: Property.MozOrient;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  "-moz-outline-radius-bottomleft"?: Property.MozOutlineRadiusBottomleft<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  "-moz-outline-radius-bottomright"?: Property.MozOutlineRadiusBottomright<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  "-moz-outline-radius-topleft"?: Property.MozOutlineRadiusTopleft<TLength>;
  /**
   * In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.
   *
   * **Initial value**: `0`
   */
  "-moz-outline-radius-topright"?: Property.MozOutlineRadiusTopright<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-moz-padding-end"?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-moz-padding-start"?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   */
  "-moz-perspective"?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   */
  "-moz-perspective-origin"?: Property.PerspectiveOrigin<TLength>;
  /**
   * **`-moz-stack-sizing`** is an extended CSS property. Normally, a `stack` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.
   *
   * **Initial value**: `stretch-to-fit`
   */
  "-moz-stack-sizing"?: Property.MozStackSizing;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   */
  "-moz-tab-size"?: Property.TabSize<TLength>;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  "-moz-text-size-adjust"?: Property.TextSizeAdjust;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  "-moz-transform-origin"?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   */
  "-moz-transform-style"?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  "-moz-transition-delay"?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  "-moz-transition-duration"?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  "-moz-transition-property"?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  "-moz-transition-timing-function"?: Property.TransitionTimingFunction;
  /**
   * The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.
   *
   * **Initial value**: `none`
   */
  "-moz-user-focus"?: Property.MozUserFocus;
  /**
   * The **`user-modify`** property has no effect in Firefox. It was originally planned to??determine whether or not the content of an element can be edited by a user.
   *
   * **Initial value**: `read-only`
   */
  "-moz-user-modify"?: Property.MozUserModify;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   */
  "-moz-user-select"?: Property.UserSelect;
  /**
   * The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.
   *
   * **Initial value**: `drag`
   */
  "-moz-window-dragging"?: Property.MozWindowDragging;
  /**
   * The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.
   *
   * **Initial value**: `false`
   */
  "-ms-accelerator"?: Property.MsAccelerator;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   */
  "-ms-align-self"?: Property.AlignSelf;
  /**
   * The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.
   *
   * **Initial value**: `tb`
   */
  "-ms-block-progression"?: Property.MsBlockProgression;
  /**
   * The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.
   *
   * **Initial value**: `none`
   */
  "-ms-content-zoom-chaining"?: Property.MsContentZoomChaining;
  /**
   * The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.
   *
   * **Initial value**: `400%`
   */
  "-ms-content-zoom-limit-max"?: Property.MsContentZoomLimitMax;
  /**
   * The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.
   *
   * **Initial value**: `100%`
   */
  "-ms-content-zoom-limit-min"?: Property.MsContentZoomLimitMin;
  /**
   * The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.
   *
   * **Initial value**: `snapInterval(0%, 100%)`
   */
  "-ms-content-zoom-snap-points"?: Property.MsContentZoomSnapPoints;
  /**
   * The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.
   *
   * **Initial value**: `none`
   */
  "-ms-content-zoom-snap-type"?: Property.MsContentZoomSnapType;
  /**
   * The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.
   *
   * **Initial value**: zoom for the top level element, none for all other elements
   */
  "-ms-content-zooming"?: Property.MsContentZooming;
  /**
   * The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.
   *
   * **Initial value**: "" (the empty string)
   */
  "-ms-filter"?: Property.MsFilter;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   */
  "-ms-flex-direction"?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   */
  "-ms-flex-positive"?: Property.FlexGrow;
  /**
   * The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.
   *
   * **Initial value**: `none`
   */
  "-ms-flow-from"?: Property.MsFlowFrom;
  /**
   * The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.
   *
   * **Initial value**: `none`
   */
  "-ms-flow-into"?: Property.MsFlowInto;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * **Initial value**: `auto`
   */
  "-ms-grid-columns"?: Property.GridAutoColumns<TLength>;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track??or pattern of tracks.
   *
   * **Initial value**: `auto`
   */
  "-ms-grid-rows"?: Property.GridAutoRows<TLength>;
  /**
   * The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.
   *
   * **Initial value**: `auto`
   */
  "-ms-high-contrast-adjust"?: Property.MsHighContrastAdjust;
  /**
   * The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.
   *
   * **Initial value**: `auto`
   */
  "-ms-hyphenate-limit-chars"?: Property.MsHyphenateLimitChars;
  /**
   * The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.
   *
   * **Initial value**: `no-limit`
   */
  "-ms-hyphenate-limit-lines"?: Property.MsHyphenateLimitLines;
  /**
   * The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.
   *
   * **Initial value**: `0`
   */
  "-ms-hyphenate-limit-zone"?: Property.MsHyphenateLimitZone<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  "-ms-hyphens"?: Property.Hyphens;
  /**
   * The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer??11.
   *
   * **Initial value**: `auto`
   */
  "-ms-ime-align"?: Property.MsImeAlign;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   */
  "-ms-line-break"?: Property.LineBreak;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   */
  "-ms-order"?: Property.Order;
  /**
   * The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.
   *
   * **Initial value**: `auto`
   */
  "-ms-overflow-style"?: Property.MsOverflowStyle;
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   */
  "-ms-overflow-x"?: Property.OverflowX;
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   */
  "-ms-overflow-y"?: Property.OverflowY;
  /**
   * The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.
   *
   * **Initial value**: `chained`
   */
  "-ms-scroll-chaining"?: Property.MsScrollChaining;
  /**
   * The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.
   *
   * **Initial value**: `auto`
   */
  "-ms-scroll-limit-x-max"?: Property.MsScrollLimitXMax<TLength>;
  /**
   * The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.
   *
   * **Initial value**: `0`
   */
  "-ms-scroll-limit-x-min"?: Property.MsScrollLimitXMin<TLength>;
  /**
   * The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.
   *
   * **Initial value**: `auto`
   */
  "-ms-scroll-limit-y-max"?: Property.MsScrollLimitYMax<TLength>;
  /**
   * The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.
   *
   * **Initial value**: `0`
   */
  "-ms-scroll-limit-y-min"?: Property.MsScrollLimitYMin<TLength>;
  /**
   * The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.
   *
   * **Initial value**: `railed`
   */
  "-ms-scroll-rails"?: Property.MsScrollRails;
  /**
   * The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  "-ms-scroll-snap-points-x"?: Property.MsScrollSnapPointsX;
  /**
   * The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  "-ms-scroll-snap-points-y"?: Property.MsScrollSnapPointsY;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   */
  "-ms-scroll-snap-type"?: Property.MsScrollSnapType;
  /**
   * The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.
   *
   * **Initial value**: `none`
   */
  "-ms-scroll-translation"?: Property.MsScrollTranslation;
  /**
   * The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: depends on user agent
   */
  "-ms-scrollbar-3dlight-color"?: Property.MsScrollbar3dlightColor;
  /**
   * The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.
   *
   * **Initial value**: `ButtonText`
   */
  "-ms-scrollbar-arrow-color"?: Property.MsScrollbarArrowColor;
  /**
   * The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.
   *
   * **Initial value**: depends on user agent
   */
  "-ms-scrollbar-base-color"?: Property.MsScrollbarBaseColor;
  /**
   * The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  "-ms-scrollbar-darkshadow-color"?: Property.MsScrollbarDarkshadowColor;
  /**
   * The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDFace`
   */
  "-ms-scrollbar-face-color"?: Property.MsScrollbarFaceColor;
  /**
   * The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDHighlight`
   */
  "-ms-scrollbar-highlight-color"?: Property.MsScrollbarHighlightColor;
  /**
   * The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  "-ms-scrollbar-shadow-color"?: Property.MsScrollbarShadowColor;
  /**
   * The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.
   *
   * **Initial value**: `Scrollbar`
   */
  "-ms-scrollbar-track-color"?: Property.MsScrollbarTrackColor;
  /**
   * The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.
   *
   * **Initial value**: `none`
   */
  "-ms-text-autospace"?: Property.MsTextAutospace;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   */
  "-ms-text-combine-horizontal"?: Property.TextCombineUpright;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   */
  "-ms-text-overflow"?: Property.TextOverflow;
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Initial value**: `auto`
   */
  "-ms-touch-action"?: Property.TouchAction;
  /**
   * The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.
   *
   * **Initial value**: `grippers`
   */
  "-ms-touch-select"?: Property.MsTouchSelect;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   */
  "-ms-transform"?: Property.Transform;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  "-ms-transform-origin"?: Property.TransformOrigin<TLength>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  "-ms-transition-delay"?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  "-ms-transition-duration"?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  "-ms-transition-property"?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  "-ms-transition-timing-function"?: Property.TransitionTimingFunction;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `text`
   */
  "-ms-user-select"?: Property.MsUserSelect;
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   */
  "-ms-word-break"?: Property.WordBreak;
  /**
   * The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.
   *
   * **Initial value**: `auto`
   */
  "-ms-wrap-flow"?: Property.MsWrapFlow;
  /**
   * The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.
   *
   * **Initial value**: `0`
   */
  "-ms-wrap-margin"?: Property.MsWrapMargin<TLength>;
  /**
   * The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.
   *
   * **Initial value**: `wrap`
   */
  "-ms-wrap-through"?: Property.MsWrapThrough;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   */
  "-ms-writing-mode"?: Property.WritingMode;
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   */
  "-o-object-fit"?: Property.ObjectFit;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   */
  "-o-object-position"?: Property.ObjectPosition<TLength>;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   */
  "-o-tab-size"?: Property.TabSize<TLength>;
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`???`'), or display a custom string.
   *
   * **Initial value**: `clip`
   */
  "-o-text-overflow"?: Property.TextOverflow;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  "-o-transform-origin"?: Property.TransformOrigin<TLength>;
  /**
   * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
   *
   * **Initial value**: `normal`
   */
  "-webkit-align-content"?: Property.AlignContent;
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Initial value**: `normal`
   */
  "-webkit-align-items"?: Property.AlignItems;
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the??grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * **Initial value**: `auto`
   */
  "-webkit-align-self"?: Property.AlignSelf;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   */
  "-webkit-animation-delay"?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   */
  "-webkit-animation-direction"?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   */
  "-webkit-animation-duration"?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   */
  "-webkit-animation-fill-mode"?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   */
  "-webkit-animation-iteration-count"?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   */
  "-webkit-animation-name"?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   */
  "-webkit-animation-play-state"?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   */
  "-webkit-animation-timing-function"?: Property.AnimationTimingFunction;
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  "-webkit-appearance"?: Property.WebkitAppearance;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   */
  "-webkit-backdrop-filter"?: Property.BackdropFilter;
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   */
  "-webkit-backface-visibility"?: Property.BackfaceVisibility;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   */
  "-webkit-background-clip"?: Property.BackgroundClip;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   */
  "-webkit-background-origin"?: Property.BackgroundOrigin;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   */
  "-webkit-background-size"?: Property.BackgroundSize<TLength>;
  /** **Initial value**: `currentcolor` */
  "-webkit-border-before-color"?: Property.WebkitBorderBeforeColor;
  /** **Initial value**: `none` */
  "-webkit-border-before-style"?: Property.WebkitBorderBeforeStyle;
  /** **Initial value**: `medium` */
  "-webkit-border-before-width"?: Property.WebkitBorderBeforeWidth<TLength>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   */
  "-webkit-border-bottom-left-radius"?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   */
  "-webkit-border-bottom-right-radius"?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * **Initial value**: `100%`
   */
  "-webkit-border-image-slice"?: Property.BorderImageSlice;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   */
  "-webkit-border-top-left-radius"?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   */
  "-webkit-border-top-right-radius"?: Property.BorderTopRightRadius<TLength>;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   */
  "-webkit-box-decoration-break"?: Property.BoxDecorationBreak;
  /**
   * The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.
   *
   * **Initial value**: `none`
   */
  "-webkit-box-reflect"?: Property.WebkitBoxReflect<TLength>;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   */
  "-webkit-box-shadow"?: Property.BoxShadow;
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   *
   * **Initial value**: `content-box`
   */
  "-webkit-box-sizing"?: Property.BoxSizing;
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   */
  "-webkit-clip-path"?: Property.ClipPath;
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   */
  "-webkit-color-adjust"?: Property.ColorAdjust;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   */
  "-webkit-column-count"?: Property.ColumnCount;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   */
  "-webkit-column-fill"?: Property.ColumnFill;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   */
  "-webkit-column-gap"?: Property.ColumnGap<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   */
  "-webkit-column-rule-color"?: Property.ColumnRuleColor;
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   */
  "-webkit-column-rule-style"?: Property.ColumnRuleStyle;
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   */
  "-webkit-column-rule-width"?: Property.ColumnRuleWidth<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   */
  "-webkit-column-span"?: Property.ColumnSpan;
  /**
   * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * **Initial value**: `auto`
   */
  "-webkit-column-width"?: Property.ColumnWidth<TLength>;
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   */
  "-webkit-filter"?: Property.Filter;
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Initial value**: `auto`
   */
  "-webkit-flex-basis"?: Property.FlexBasis<TLength>;
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   */
  "-webkit-flex-direction"?: Property.FlexDirection;
  /**
   * The **`flex-grow`** CSS??property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * **Initial value**: `0`
   */
  "-webkit-flex-grow"?: Property.FlexGrow;
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * **Initial value**: `1`
   */
  "-webkit-flex-shrink"?: Property.FlexShrink;
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * **Initial value**: `nowrap`
   */
  "-webkit-flex-wrap"?: Property.FlexWrap;
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   */
  "-webkit-font-feature-settings"?: Property.FontFeatureSettings;
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   */
  "-webkit-font-kerning"?: Property.FontKerning;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   */
  "-webkit-font-variant-ligatures"?: Property.FontVariantLigatures;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   */
  "-webkit-hyphens"?: Property.Hyphens;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Initial value**: `normal`
   */
  "-webkit-justify-content"?: Property.JustifyContent;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   */
  "-webkit-line-break"?: Property.LineBreak;
  /**
   * The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.
   *
   * **Initial value**: `none`
   */
  "-webkit-line-clamp"?: Property.WebkitLineClamp;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`,??`margin-right`,??`margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-webkit-margin-end"?: Property.MarginInlineEnd<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`,??`margin-right`,??`margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-webkit-margin-start"?: Property.MarginInlineStart<TLength>;
  /**
   * If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   */
  "-webkit-mask-attachment"?: Property.WebkitMaskAttachment;
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border`
   */
  "-webkit-mask-clip"?: Property.WebkitMaskClip;
  /**
   * The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.
   *
   * **Initial value**: `source-over`
   */
  "-webkit-mask-composite"?: Property.WebkitMaskComposite;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   */
  "-webkit-mask-image"?: Property.WebkitMaskImage;
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Initial value**: `padding`
   */
  "-webkit-mask-origin"?: Property.WebkitMaskOrigin;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `0% 0%`
   */
  "-webkit-mask-position"?: Property.WebkitMaskPosition<TLength>;
  /**
   * The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.
   *
   * **Initial value**: `0%`
   */
  "-webkit-mask-position-x"?: Property.WebkitMaskPositionX<TLength>;
  /**
   * The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.
   *
   * **Initial value**: `0%`
   */
  "-webkit-mask-position-y"?: Property.WebkitMaskPositionY<TLength>;
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   */
  "-webkit-mask-repeat"?: Property.WebkitMaskRepeat;
  /**
   * The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.
   *
   * **Initial value**: `repeat`
   */
  "-webkit-mask-repeat-x"?: Property.WebkitMaskRepeatX;
  /**
   * The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.
   *
   * **Initial value**: `repeat`
   */
  "-webkit-mask-repeat-y"?: Property.WebkitMaskRepeatY;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto auto`
   */
  "-webkit-mask-size"?: Property.WebkitMaskSize<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   */
  "-webkit-max-inline-size"?: Property.MaxInlineSize<TLength>;
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   */
  "-webkit-order"?: Property.Order;
  /**
   * The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.
   *
   * **Initial value**: `auto`
   */
  "-webkit-overflow-scrolling"?: Property.WebkitOverflowScrolling;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-webkit-padding-end"?: Property.PaddingInlineEnd<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`,??`padding-right`,??`padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   */
  "-webkit-padding-start"?: Property.PaddingInlineStart<TLength>;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   */
  "-webkit-perspective"?: Property.Perspective<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   */
  "-webkit-perspective-origin"?: Property.PerspectiveOrigin<TLength>;
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   */
  "-webkit-scroll-snap-type"?: Property.ScrollSnapType;
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   */
  "-webkit-shape-margin"?: Property.ShapeMargin<TLength>;
  /**
   * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user??that their tap is being successfully recognized, and indicates which element they're tapping on.
   *
   * **Initial value**: `black`
   */
  "-webkit-tap-highlight-color"?: Property.WebkitTapHighlightColor;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   */
  "-webkit-text-combine"?: Property.TextCombineUpright;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   */
  "-webkit-text-decoration-color"?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   */
  "-webkit-text-decoration-line"?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element???s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   */
  "-webkit-text-decoration-skip"?: Property.TextDecorationSkip;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   */
  "-webkit-text-decoration-style"?: Property.TextDecorationStyle;
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   */
  "-webkit-text-emphasis-color"?: Property.TextEmphasisColor;
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Initial value**: `over right`
   */
  "-webkit-text-emphasis-position"?: Property.TextEmphasisPosition;
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   */
  "-webkit-text-emphasis-style"?: Property.TextEmphasisStyle;
  /**
   * The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Initial value**: `currentcolor`
   */
  "-webkit-text-fill-color"?: Property.WebkitTextFillColor;
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   */
  "-webkit-text-orientation"?: Property.TextOrientation;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  "-webkit-text-size-adjust"?: Property.TextSizeAdjust;
  /**
   * The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.
   *
   * **Initial value**: `currentcolor`
   */
  "-webkit-text-stroke-color"?: Property.WebkitTextStrokeColor;
  /**
   * The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.
   *
   * **Initial value**: `0`
   */
  "-webkit-text-stroke-width"?: Property.WebkitTextStrokeWidth<TLength>;
  /**
   * The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.
   *
   * **Initial value**: `default`
   */
  "-webkit-touch-callout"?: Property.WebkitTouchCallout;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   */
  "-webkit-transform"?: Property.Transform;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   */
  "-webkit-transform-origin"?: Property.TransformOrigin<TLength>;
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   */
  "-webkit-transform-style"?: Property.TransformStyle;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   */
  "-webkit-transition-delay"?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   */
  "-webkit-transition-duration"?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   */
  "-webkit-transition-property"?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   */
  "-webkit-transition-timing-function"?: Property.TransitionTimingFunction;
  /** **Initial value**: `read-only` */
  "-webkit-user-modify"?: Property.WebkitUserModify;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   */
  "-webkit-user-select"?: Property.UserSelect;
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
   *
   * **Initial value**: `horizontal-tb`
   */
  "-webkit-writing-mode"?: Property.WritingMode;
}

export interface VendorShorthandPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  /** The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`. */
  "-moz-animation"?: Property.Animation<TTime>;
  /** The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border. */
  "-moz-border-image"?: Property.BorderImage;
  /** The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout. */
  "-moz-column-rule"?: Property.ColumnRule<TLength>;
  /** The **`columns`** CSS property sets the column width and column count of an element. */
  "-moz-columns"?: Property.Columns<TLength>;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  "-moz-transition"?: Property.Transition<TTime>;
  /** The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties. */
  "-ms-content-zoom-limit"?: Property.MsContentZoomLimit;
  /** The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties. */
  "-ms-content-zoom-snap"?: Property.MsContentZoomSnap;
  /** The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. */
  "-ms-flex"?: Property.Flex<TLength>;
  /** The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties. */
  "-ms-scroll-limit"?: Property.MsScrollLimit;
  /** The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties. */
  "-ms-scroll-snap-x"?: Property.MsScrollSnapX;
  /** The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties. */
  "-ms-scroll-snap-y"?: Property.MsScrollSnapY;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  "-ms-transition"?: Property.Transition<TTime>;
  /** The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`. */
  "-webkit-animation"?: Property.Animation<TTime>;
  /** The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. */
  "-webkit-border-before"?: Property.WebkitBorderBefore<TLength>;
  /** The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border. */
  "-webkit-border-image"?: Property.BorderImage;
  /** The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners. */
  "-webkit-border-radius"?: Property.BorderRadius<TLength>;
  /** The **`column-rule`**??shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout. */
  "-webkit-column-rule"?: Property.ColumnRule<TLength>;
  /** The **`columns`** CSS property sets the column width and column count of an element. */
  "-webkit-columns"?: Property.Columns<TLength>;
  /** The **`flex`** CSS property sets how a flex _item_ will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. */
  "-webkit-flex"?: Property.Flex<TLength>;
  /** The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties. */
  "-webkit-flex-flow"?: Property.FlexFlow;
  /** The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points. */
  "-webkit-mask"?: Property.WebkitMask<TLength>;
  /** The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`. */
  "-webkit-text-emphasis"?: Property.TextEmphasis;
  /** The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`. */
  "-webkit-text-stroke"?: Property.WebkitTextStroke<TLength>;
  /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
  "-webkit-transition"?: Property.Transition<TTime>;
}

export interface VendorPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends VendorLonghandPropertiesHyphen<TLength, TTime>,
    VendorShorthandPropertiesHyphen<TLength, TTime> {}

export interface ObsoletePropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  "box-align"?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "box-direction"?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "box-flex"?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "box-flex-group"?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  "box-lines"?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "box-ordinal-group"?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "box-orient"?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "box-pack"?: Property.BoxPack;
  /**
   * The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: Property.Clip;
  /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "font-variant-alternates"?: Property.FontVariantAlternates;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-column-gap"?: Property.GridColumnGap<TLength>;
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * @deprecated
   */
  "grid-gap"?: Property.GridGap<TLength>;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-row-gap"?: Property.GridRowGap<TLength>;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "ime-mode"?: Property.ImeMode;
  /**
   * The **`inset-block`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-block"?: Property.InsetBlock<TLength>;
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-block-end"?: Property.InsetBlockEnd<TLength>;
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-block-start"?: Property.InsetBlockStart<TLength>;
  /**
   * The **`inset-inline`**??CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and??`bottom`, or `right` and??`left` properties??depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-inline"?: Property.InsetInline<TLength>;
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-inline-end"?: Property.InsetInlineEnd<TLength>;
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "offset-inline-start"?: Property.InsetInlineStart<TLength>;
  /**
   * The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-coordinate"?: Property.ScrollSnapCoordinate<TLength>;
  /**
   * The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.
   *
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  "scroll-snap-destination"?: Property.ScrollSnapDestination<TLength>;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-x"?: Property.ScrollSnapPointsX;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-y"?: Property.ScrollSnapPointsY;
  /**
   * The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-x"?: Property.ScrollSnapTypeX;
  /**
   * The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-y"?: Property.ScrollSnapTypeY;
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "text-combine-horizontal"?: Property.TextCombineUpright;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  "-khtml-box-align"?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-khtml-box-direction"?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-khtml-box-flex"?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-khtml-box-flex-group"?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  "-khtml-box-lines"?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-khtml-box-ordinal-group"?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-khtml-box-orient"?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-khtml-box-pack"?: Property.BoxPack;
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-khtml-line-break"?: Property.LineBreak;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  "-khtml-opacity"?: Property.Opacity;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-khtml-user-select"?: Property.UserSelect;
  /**
   * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
   *
   * **Initial value**: `border-box`
   *
   * @deprecated
   */
  "-moz-background-clip"?: Property.BackgroundClip;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  "-moz-background-inline-policy"?: Property.BoxDecorationBreak;
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   *
   * **Initial value**: `padding-box`
   *
   * @deprecated
   */
  "-moz-background-origin"?: Property.BackgroundOrigin;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  "-moz-background-size"?: Property.BackgroundSize<TLength>;
  /**
   * The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-binding"?: Property.MozBinding;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-border-bottom-colors"?: Property.MozBorderBottomColors;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-border-left-colors"?: Property.MozBorderLeftColors;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * @deprecated
   */
  "-moz-border-radius"?: Property.BorderRadius<TLength>;
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomleft"?: Property.BorderBottomLeftRadius<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomright"?: Property.BorderBottomRightRadius<TLength>;
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topleft"?: Property.BorderTopLeftRadius<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topright"?: Property.BorderTopRightRadius<TLength>;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-border-right-colors"?: Property.MozBorderRightColors;
  /**
   * In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-border-top-colors"?: Property.MozBorderTopColors;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  "-moz-box-align"?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-moz-box-direction"?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-box-flex"?: Property.BoxFlex;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-moz-box-ordinal-group"?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-moz-box-orient"?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-moz-box-pack"?: Property.BoxPack;
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-box-shadow"?: Property.BoxShadow;
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  "-moz-opacity"?: Property.Opacity;
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * @deprecated
   */
  "-moz-outline"?: Property.Outline<TLength>;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  "-moz-outline-color"?: Property.OutlineColor;
  /**
   * In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS property can be used to give an element's `outline` rounded corners.
   *
   * @deprecated
   */
  "-moz-outline-radius"?: Property.MozOutlineRadius<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-outline-style"?: Property.OutlineStyle;
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  "-moz-outline-width"?: Property.OutlineWidth<TLength>;
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-moz-text-align-last"?: Property.TextAlignLast;
  /**
   * The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-text-blink"?: Property.MozTextBlink;
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  "-moz-text-decoration-color"?: Property.TextDecorationColor;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-text-decoration-line"?: Property.TextDecorationLine;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  "-moz-text-decoration-style"?: Property.TextDecorationStyle;
  /**
   * In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-moz-user-input"?: Property.MozUserInput;
  /**
   * The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.
   *
   * **Initial value**: `default`
   *
   * @deprecated
   */
  "-moz-window-shadow"?: Property.MozWindowShadow;
  /**
   * The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-ms-ime-mode"?: Property.ImeMode;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * @deprecated
   */
  "-o-animation"?: Property.Animation<TTime>;
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-delay"?: Property.AnimationDelay<TTime>;
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-o-animation-direction"?: Property.AnimationDirection;
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-duration"?: Property.AnimationDuration<TTime>;
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-fill-mode"?: Property.AnimationFillMode;
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-o-animation-iteration-count"?: Property.AnimationIterationCount;
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-name"?: Property.AnimationName;
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   *
   * @deprecated
   */
  "-o-animation-play-state"?: Property.AnimationPlayState;
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-animation-timing-function"?: Property.AnimationTimingFunction;
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  "-o-background-size"?: Property.BackgroundSize<TLength>;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * @deprecated
   */
  "-o-border-image"?: Property.BorderImage;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-transform"?: Property.Transform;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * @deprecated
   */
  "-o-transition"?: Property.Transition<TTime>;
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-delay"?: Property.TransitionDelay<TTime>;
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-duration"?: Property.TransitionDuration<TTime>;
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  "-o-transition-property"?: Property.TransitionProperty;
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-transition-timing-function"?: Property.TransitionTimingFunction;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  "-webkit-box-align"?: Property.BoxAlign;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-webkit-box-direction"?: Property.BoxDirection;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-webkit-box-flex"?: Property.BoxFlex;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-webkit-box-flex-group"?: Property.BoxFlexGroup;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  "-webkit-box-lines"?: Property.BoxLines;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-webkit-box-ordinal-group"?: Property.BoxOrdinalGroup;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-webkit-box-orient"?: Property.BoxOrient;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-webkit-box-pack"?: Property.BoxPack;
  /**
   * The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-webkit-scroll-snap-points-x"?: Property.ScrollSnapPointsX;
  /**
   * The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-webkit-scroll-snap-points-y"?: Property.ScrollSnapPointsY;
}

export interface SvgPropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
  "alignment-baseline"?: Property.AlignmentBaseline;
  "baseline-shift"?: Property.BaselineShift<TLength>;
  clip?: Property.Clip;
  "clip-path"?: Property.ClipPath;
  "clip-rule"?: Property.ClipRule;
  color?: Property.Color;
  "color-interpolation"?: Property.ColorInterpolation;
  "color-rendering"?: Property.ColorRendering;
  cursor?: Property.Cursor;
  direction?: Property.Direction;
  display?: Property.Display;
  "dominant-baseline"?: Property.DominantBaseline;
  fill?: Property.Fill;
  "fill-opacity"?: Property.FillOpacity;
  "fill-rule"?: Property.FillRule;
  filter?: Property.Filter;
  "flood-color"?: Property.FloodColor;
  "flood-opacity"?: Property.FloodOpacity;
  font?: Property.Font;
  "font-family"?: Property.FontFamily;
  "font-size"?: Property.FontSize<TLength>;
  "font-size-adjust"?: Property.FontSizeAdjust;
  "font-stretch"?: Property.FontStretch;
  "font-style"?: Property.FontStyle;
  "font-variant"?: Property.FontVariant;
  "font-weight"?: Property.FontWeight;
  "glyph-orientation-vertical"?: Property.GlyphOrientationVertical;
  "image-rendering"?: Property.ImageRendering;
  "letter-spacing"?: Property.LetterSpacing<TLength>;
  "lighting-color"?: Property.LightingColor;
  "line-height"?: Property.LineHeight<TLength>;
  marker?: Property.Marker;
  "marker-end"?: Property.MarkerEnd;
  "marker-mid"?: Property.MarkerMid;
  "marker-start"?: Property.MarkerStart;
  mask?: Property.Mask<TLength>;
  opacity?: Property.Opacity;
  overflow?: Property.Overflow;
  "paint-order"?: Property.PaintOrder;
  "pointer-events"?: Property.PointerEvents;
  "shape-rendering"?: Property.ShapeRendering;
  "stop-color"?: Property.StopColor;
  "stop-opacity"?: Property.StopOpacity;
  stroke?: Property.Stroke;
  "stroke-dasharray"?: Property.StrokeDasharray<TLength>;
  "stroke-dashoffset"?: Property.StrokeDashoffset<TLength>;
  "stroke-linecap"?: Property.StrokeLinecap;
  "stroke-linejoin"?: Property.StrokeLinejoin;
  "stroke-miterlimit"?: Property.StrokeMiterlimit;
  "stroke-opacity"?: Property.StrokeOpacity;
  "stroke-width"?: Property.StrokeWidth<TLength>;
  "text-anchor"?: Property.TextAnchor;
  "text-decoration"?: Property.TextDecoration<TLength>;
  "text-rendering"?: Property.TextRendering;
  "unicode-bidi"?: Property.UnicodeBidi;
  "vector-effect"?: Property.VectorEffect;
  visibility?: Property.Visibility;
  "white-space"?: Property.WhiteSpace;
  "word-spacing"?: Property.WordSpacing<TLength>;
  "writing-mode"?: Property.WritingMode;
}

export interface PropertiesHyphen<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardPropertiesHyphen<TLength, TTime>,
    VendorPropertiesHyphen<TLength, TTime>,
    ObsoletePropertiesHyphen<TLength, TTime>,
    SvgPropertiesHyphen<TLength, TTime> {}

export type StandardLonghandPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof StandardLonghandProperties<TLength, TTime>]: StandardLonghandProperties<TLength, TTime>[P] | StandardLonghandProperties<TLength, TTime>[P][];
};

export type StandardShorthandPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof StandardShorthandProperties<TLength, TTime>]: StandardShorthandProperties<TLength, TTime>[P] | StandardShorthandProperties<TLength, TTime>[P][];
};

export interface StandardPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandPropertiesFallback<TLength, TTime>,
    StandardShorthandPropertiesFallback<TLength, TTime> {}

export type VendorLonghandPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof VendorLonghandProperties<TLength, TTime>]: VendorLonghandProperties<TLength, TTime>[P] | VendorLonghandProperties<TLength, TTime>[P][];
};

export type VendorShorthandPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof VendorShorthandProperties<TLength, TTime>]: VendorShorthandProperties<TLength, TTime>[P] | VendorShorthandProperties<TLength, TTime>[P][];
};

export interface VendorPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends VendorLonghandPropertiesFallback<TLength, TTime>,
    VendorShorthandPropertiesFallback<TLength, TTime> {}

export type ObsoletePropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof ObsoleteProperties<TLength, TTime>]: ObsoleteProperties<TLength, TTime>[P] | ObsoleteProperties<TLength, TTime>[P][];
};

export type SvgPropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof SvgProperties<TLength, TTime>]: SvgProperties<TLength, TTime>[P] | SvgProperties<TLength, TTime>[P][];
};

export interface PropertiesFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardPropertiesFallback<TLength, TTime>,
    VendorPropertiesFallback<TLength, TTime>,
    ObsoletePropertiesFallback<TLength, TTime>,
    SvgPropertiesFallback<TLength, TTime> {}

export type StandardLonghandPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof StandardLonghandPropertiesHyphen<TLength, TTime>]: StandardLonghandPropertiesHyphen<TLength, TTime>[P] | StandardLonghandPropertiesHyphen<TLength, TTime>[P][];
};

export type StandardShorthandPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof StandardShorthandPropertiesHyphen<TLength, TTime>]: StandardShorthandPropertiesHyphen<TLength, TTime>[P] | StandardShorthandPropertiesHyphen<TLength, TTime>[P][];
};

export interface StandardPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandPropertiesHyphenFallback<TLength, TTime>,
    StandardShorthandPropertiesHyphenFallback<TLength, TTime> {}

export type VendorLonghandPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof VendorLonghandPropertiesHyphen<TLength, TTime>]: VendorLonghandPropertiesHyphen<TLength, TTime>[P] | VendorLonghandPropertiesHyphen<TLength, TTime>[P][];
};

export type VendorShorthandPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof VendorShorthandPropertiesHyphen<TLength, TTime>]: VendorShorthandPropertiesHyphen<TLength, TTime>[P] | VendorShorthandPropertiesHyphen<TLength, TTime>[P][];
};

export interface VendorPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends VendorLonghandPropertiesHyphenFallback<TLength, TTime>,
    VendorShorthandPropertiesHyphenFallback<TLength, TTime> {}

export type ObsoletePropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof ObsoletePropertiesHyphen<TLength, TTime>]: ObsoletePropertiesHyphen<TLength, TTime>[P] | ObsoletePropertiesHyphen<TLength, TTime>[P][];
};

export type SvgPropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
  [P in keyof SvgPropertiesHyphen<TLength, TTime>]: SvgPropertiesHyphen<TLength, TTime>[P] | SvgPropertiesHyphen<TLength, TTime>[P][];
};

export interface PropertiesHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardPropertiesHyphenFallback<TLength, TTime>,
    VendorPropertiesHyphenFallback<TLength, TTime>,
    ObsoletePropertiesHyphenFallback<TLength, TTime>,
    SvgPropertiesHyphenFallback<TLength, TTime> {}

export type AtRules =
  | "@charset"
  | "@counter-style"
  | "@document"
  | "@font-face"
  | "@font-feature-values"
  | "@import"
  | "@keyframes"
  | "@media"
  | "@namespace"
  | "@page"
  | "@supports"
  | "@viewport";

export type AdvancedPseudos =
  | ":-moz-any()"
  | ":-moz-dir"
  | ":-webkit-any()"
  | "::cue"
  | "::part"
  | "::slotted"
  | ":dir"
  | ":has"
  | ":host"
  | ":host-context"
  | ":is"
  | ":lang"
  | ":matches()"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type"
  | ":where";

export type SimplePseudos =
  | ":-khtml-any-link"
  | ":-moz-any-link"
  | ":-moz-focusring"
  | ":-moz-full-screen"
  | ":-moz-placeholder"
  | ":-moz-read-only"
  | ":-moz-read-write"
  | ":-ms-fullscreen"
  | ":-ms-input-placeholder"
  | ":-webkit-any-link"
  | ":-webkit-full-screen"
  | "::-moz-placeholder"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-moz-selection"
  | "::-ms-backdrop"
  | "::-ms-browse"
  | "::-ms-check"
  | "::-ms-clear"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-input-placeholder"
  | "::-ms-reveal"
  | "::-ms-thumb"
  | "::-ms-ticks-after"
  | "::-ms-ticks-before"
  | "::-ms-tooltip"
  | "::-ms-track"
  | "::-ms-value"
  | "::-webkit-backdrop"
  | "::-webkit-input-placeholder"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::marker"
  | "::placeholder"
  | "::selection"
  | "::spelling-error"
  | ":active"
  | ":after"
  | ":any-link"
  | ":before"
  | ":blank"
  | ":checked"
  | ":default"
  | ":defined"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-letter"
  | ":first-line"
  | ":first-of-type"
  | ":focus"
  | ":focus-visible"
  | ":focus-within"
  | ":fullscreen"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited";

export type Pseudos = AdvancedPseudos | SimplePseudos;

export type HtmlAttributes =
  | "[-webkit-dropzone]"
  | "[-webkit-slot]"
  | "[abbr]"
  | "[accept-charset]"
  | "[accept]"
  | "[accesskey]"
  | "[action]"
  | "[align]"
  | "[alink]"
  | "[allow]"
  | "[allowfullscreen]"
  | "[allowpaymentrequest]"
  | "[alt]"
  | "[archive]"
  | "[async]"
  | "[autobuffer]"
  | "[autocapitalize]"
  | "[autocomplete]"
  | "[autofocus]"
  | "[autoplay]"
  | "[axis]"
  | "[background]"
  | "[behavior]"
  | "[bgcolor]"
  | "[border]"
  | "[bottommargin]"
  | "[buffered]"
  | "[cellpadding]"
  | "[cellspacing]"
  | "[char]"
  | "[charoff]"
  | "[charset]"
  | "[checked]"
  | "[cite]"
  | "[class]"
  | "[classid]"
  | "[clear]"
  | "[code]"
  | "[codebase]"
  | "[codetype]"
  | "[color]"
  | "[cols]"
  | "[colspan]"
  | "[command]"
  | "[compact]"
  | "[content]"
  | "[contenteditable]"
  | "[contextmenu]"
  | "[controls]"
  | "[coords]"
  | "[crossorigin]"
  | "[data]"
  | "[datafld]"
  | "[datasrc]"
  | "[datetime]"
  | "[declare]"
  | "[decoding]"
  | "[default]"
  | "[defer]"
  | "[dir]"
  | "[direction]"
  | "[disabled]"
  | "[download]"
  | "[draggable]"
  | "[dropzone]"
  | "[enctype]"
  | "[exportparts]"
  | "[face]"
  | "[for]"
  | "[form]"
  | "[formaction]"
  | "[formenctype]"
  | "[formmethod]"
  | "[formnovalidate]"
  | "[formtarget]"
  | "[frame]"
  | "[frameborder]"
  | "[headers]"
  | "[height]"
  | "[hidden]"
  | "[high]"
  | "[href]"
  | "[hreflang]"
  | "[hspace]"
  | "[http-equiv]"
  | "[icon]"
  | "[id]"
  | "[inputmode]"
  | "[integrity]"
  | "[intrinsicsize]"
  | "[is]"
  | "[ismap]"
  | "[itemid]"
  | "[itemprop]"
  | "[itemref]"
  | "[itemscope]"
  | "[itemtype]"
  | "[kind]"
  | "[label]"
  | "[lang]"
  | "[language]"
  | "[leftmargin]"
  | "[link]"
  | "[longdesc]"
  | "[loop]"
  | "[low]"
  | "[manifest]"
  | "[marginheight]"
  | "[marginwidth]"
  | "[max]"
  | "[maxlength]"
  | "[mayscript]"
  | "[media]"
  | "[method]"
  | "[methods]"
  | "[min]"
  | "[minlength]"
  | "[moz-opaque]"
  | "[mozallowfullscreen]"
  | "[mozbrowser]"
  | "[mozcurrentsampleoffset]"
  | "[msallowfullscreen]"
  | "[multiple]"
  | "[muted]"
  | "[name]"
  | "[nohref]"
  | "[nomodule]"
  | "[noresize]"
  | "[noshade]"
  | "[novalidate]"
  | "[nowrap]"
  | "[object]"
  | "[onafterprint]"
  | "[onbeforeprint]"
  | "[onbeforeunload]"
  | "[onblur]"
  | "[onerror]"
  | "[onfocus]"
  | "[onhashchange]"
  | "[onlanguagechange]"
  | "[onload]"
  | "[onmessage]"
  | "[onoffline]"
  | "[ononline]"
  | "[onpopstate]"
  | "[onredo]"
  | "[onresize]"
  | "[onstorage]"
  | "[onundo]"
  | "[onunload]"
  | "[open]"
  | "[optimum]"
  | "[part]"
  | "[ping]"
  | "[placeholder]"
  | "[played]"
  | "[poster]"
  | "[prefetch]"
  | "[preload]"
  | "[profile]"
  | "[prompt]"
  | "[radiogroup]"
  | "[readonly]"
  | "[referrerPolicy]"
  | "[referrerpolicy]"
  | "[rel]"
  | "[required]"
  | "[rev]"
  | "[reversed]"
  | "[rightmargin]"
  | "[rows]"
  | "[rowspan]"
  | "[rules]"
  | "[sandbox-allow-modals]"
  | "[sandbox-allow-popups-to-escape-sandbox]"
  | "[sandbox-allow-popups]"
  | "[sandbox-allow-presentation]"
  | "[sandbox-allow-storage-access-by-user-activation]"
  | "[sandbox-allow-top-navigation-by-user-activation]"
  | "[sandbox]"
  | "[scope]"
  | "[scoped]"
  | "[scrollamount]"
  | "[scrolldelay]"
  | "[scrolling]"
  | "[selected]"
  | "[shape]"
  | "[size]"
  | "[sizes]"
  | "[slot]"
  | "[span]"
  | "[spellcheck]"
  | "[src]"
  | "[srcdoc]"
  | "[srclang]"
  | "[srcset]"
  | "[standby]"
  | "[start]"
  | "[style]"
  | "[summary]"
  | "[tabindex]"
  | "[target]"
  | "[text]"
  | "[title]"
  | "[topmargin]"
  | "[translate]"
  | "[truespeed]"
  | "[type]"
  | "[typemustmatch]"
  | "[usemap]"
  | "[valign]"
  | "[value]"
  | "[valuetype]"
  | "[version]"
  | "[vlink]"
  | "[volume]"
  | "[vspace]"
  | "[webkitallowfullscreen]"
  | "[width]"
  | "[wrap]"
  | "[xmlns]";

export type SvgAttributes =
  | "[accent-height]"
  | "[alignment-baseline]"
  | "[allowReorder]"
  | "[alphabetic]"
  | "[animation]"
  | "[arabic-form]"
  | "[ascent]"
  | "[attributeName]"
  | "[attributeType]"
  | "[azimuth]"
  | "[baseFrequency]"
  | "[baseProfile]"
  | "[baseline-shift]"
  | "[bbox]"
  | "[begin]"
  | "[bias]"
  | "[by]"
  | "[calcMode]"
  | "[cap-height]"
  | "[class]"
  | "[clip-path]"
  | "[clip-rule]"
  | "[clipPathUnits]"
  | "[clip]"
  | "[color-interpolation-filters]"
  | "[color-interpolation]"
  | "[color-profile]"
  | "[color-rendering]"
  | "[color]"
  | "[contentScriptType]"
  | "[contentStyleType]"
  | "[cursor]"
  | "[cx]"
  | "[cy]"
  | "[d]"
  | "[descent]"
  | "[diffuseConstant]"
  | "[direction]"
  | "[display]"
  | "[divisor]"
  | "[document]"
  | "[dominant-baseline]"
  | "[download]"
  | "[dur]"
  | "[dx]"
  | "[dy]"
  | "[edgeMode]"
  | "[elevation]"
  | "[enable-background]"
  | "[externalResourcesRequired]"
  | "[fill-opacity]"
  | "[fill-rule]"
  | "[fill]"
  | "[filterRes]"
  | "[filterUnits]"
  | "[filter]"
  | "[flood-color]"
  | "[flood-opacity]"
  | "[font-family]"
  | "[font-size-adjust]"
  | "[font-size]"
  | "[font-stretch]"
  | "[font-style]"
  | "[font-variant]"
  | "[font-weight]"
  | "[format]"
  | "[fr]"
  | "[from]"
  | "[fx]"
  | "[fy]"
  | "[g1]"
  | "[g2]"
  | "[global]"
  | "[glyph-name]"
  | "[glyph-orientation-horizontal]"
  | "[glyph-orientation-vertical]"
  | "[glyphRef]"
  | "[gradientTransform]"
  | "[gradientUnits]"
  | "[graphical]"
  | "[hanging]"
  | "[hatchContentUnits]"
  | "[hatchUnits]"
  | "[height]"
  | "[horiz-adv-x]"
  | "[horiz-origin-x]"
  | "[horiz-origin-y]"
  | "[href]"
  | "[hreflang]"
  | "[id]"
  | "[ideographic]"
  | "[image-rendering]"
  | "[in2]"
  | "[in]"
  | "[k1]"
  | "[k2]"
  | "[k3]"
  | "[k4]"
  | "[k]"
  | "[kernelMatrix]"
  | "[kernelUnitLength]"
  | "[kerning]"
  | "[keyPoints]"
  | "[lang]"
  | "[lengthAdjust]"
  | "[letter-spacing]"
  | "[lighterForError]"
  | "[lighting-color]"
  | "[limitingConeAngle]"
  | "[local]"
  | "[marker-end]"
  | "[marker-mid]"
  | "[marker-start]"
  | "[markerHeight]"
  | "[markerUnits]"
  | "[markerWidth]"
  | "[maskContentUnits]"
  | "[maskUnits]"
  | "[mask]"
  | "[mathematical]"
  | "[media]"
  | "[method]"
  | "[mode]"
  | "[name]"
  | "[numOctaves]"
  | "[offset]"
  | "[opacity]"
  | "[operator]"
  | "[order]"
  | "[orient]"
  | "[orientation]"
  | "[origin]"
  | "[overflow]"
  | "[overline-position]"
  | "[overline-thickness]"
  | "[paint-order]"
  | "[panose-1]"
  | "[path]"
  | "[patternContentUnits]"
  | "[patternTransform]"
  | "[patternUnits]"
  | "[ping]"
  | "[pitch]"
  | "[pointer-events]"
  | "[pointsAtX]"
  | "[pointsAtY]"
  | "[pointsAtZ]"
  | "[points]"
  | "[preserveAlpha]"
  | "[preserveAspectRatio]"
  | "[primitiveUnits]"
  | "[r]"
  | "[radius]"
  | "[refX]"
  | "[refY]"
  | "[referrerPolicy]"
  | "[rel]"
  | "[rendering-intent]"
  | "[repeatCount]"
  | "[requiredExtensions]"
  | "[requiredFeatures]"
  | "[rotate]"
  | "[rx]"
  | "[ry]"
  | "[scale]"
  | "[seed]"
  | "[shape-rendering]"
  | "[side]"
  | "[slope]"
  | "[solid-color]"
  | "[solid-opacity]"
  | "[spacing]"
  | "[specularConstant]"
  | "[specularExponent]"
  | "[spreadMethod]"
  | "[startOffset]"
  | "[stdDeviation]"
  | "[stemh]"
  | "[stemv]"
  | "[stitchTiles]"
  | "[stop-color]"
  | "[stop-opacity]"
  | "[strikethrough-position]"
  | "[strikethrough-thickness]"
  | "[string]"
  | "[stroke-dasharray]"
  | "[stroke-dashoffset]"
  | "[stroke-linecap]"
  | "[stroke-linejoin]"
  | "[stroke-miterlimit]"
  | "[stroke-opacity]"
  | "[stroke-width]"
  | "[stroke]"
  | "[style]"
  | "[surfaceScale]"
  | "[systemLanguage]"
  | "[tabindex]"
  | "[targetX]"
  | "[targetY]"
  | "[target]"
  | "[text-anchor]"
  | "[text-decoration]"
  | "[text-overflow]"
  | "[text-rendering]"
  | "[textLength]"
  | "[title]"
  | "[to]"
  | "[transform]"
  | "[type]"
  | "[u1]"
  | "[u2]"
  | "[underline-position]"
  | "[underline-thickness]"
  | "[unicode-bidi]"
  | "[unicode-range]"
  | "[unicode]"
  | "[units-per-em]"
  | "[v-alphabetic]"
  | "[v-hanging]"
  | "[v-ideographic]"
  | "[v-mathematical]"
  | "[values]"
  | "[vector-effect]"
  | "[version]"
  | "[vert-adv-y]"
  | "[vert-origin-x]"
  | "[vert-origin-y]"
  | "[viewBox]"
  | "[viewTarget]"
  | "[visibility]"
  | "[white-space]"
  | "[width]"
  | "[widths]"
  | "[word-spacing]"
  | "[writing-mode]"
  | "[x-height]"
  | "[x1]"
  | "[x2]"
  | "[xChannelSelector]"
  | "[x]"
  | "[y1]"
  | "[y2]"
  | "[yChannelSelector]"
  | "[y]"
  | "[z]"
  | "[zoomAndPan]";

export type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";

export namespace Property {
  export type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type AlignItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});

  export type AlignSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type All = Globals;

  export type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});

  export type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});

  export type AnimationDuration<TTime = string & {}> = Globals | TTime | (string & {});

  export type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});

  export type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});

  export type AnimationName = Globals | "none" | (string & {});

  export type AnimationPlayState = Globals | "paused" | "running" | (string & {});

  export type AnimationTimingFunction = Globals | DataType.TimingFunction | (string & {});

  export type Appearance = Globals | DataType.Compat | "button" | "none" | "textfield";

  export type AspectRatio = Globals | "auto" | (string & {});

  export type BackdropFilter = Globals | "none" | (string & {});

  export type BackfaceVisibility = Globals | "hidden" | "visible";

  export type Background<TLength = (string & {}) | 0> = Globals | DataType.FinalBgLayer<TLength> | (string & {});

  export type BackgroundAttachment = Globals | DataType.Attachment | (string & {});

  export type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});

  export type BackgroundClip = Globals | DataType.Box | (string & {});

  export type BackgroundColor = Globals | DataType.Color;

  export type BackgroundImage = Globals | "none" | (string & {});

  export type BackgroundOrigin = Globals | DataType.Box | (string & {});

  export type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});

  export type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});

  export type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});

  export type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type BlockOverflow = Globals | "clip" | "ellipsis" | (string & {});

  export type BlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockColor = Globals | DataType.Color | (string & {});

  export type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockEndColor = Globals | DataType.Color;

  export type BorderBlockEndStyle = Globals | DataType.LineStyle;

  export type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockStartColor = Globals | DataType.Color;

  export type BorderBlockStartStyle = Globals | DataType.LineStyle;

  export type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStyle = Globals | DataType.LineStyle;

  export type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBottomColor = Globals | DataType.Color;

  export type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomStyle = Globals | DataType.LineStyle;

  export type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderCollapse = Globals | "collapse" | "separate";

  export type BorderColor = Globals | DataType.Color | (string & {});

  export type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type BorderImageSlice = Globals | (string & {}) | (number & {});

  export type BorderImageSource = Globals | "none" | (string & {});

  export type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineColor = Globals | DataType.Color | (string & {});

  export type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineEndColor = Globals | DataType.Color;

  export type BorderInlineEndStyle = Globals | DataType.LineStyle;

  export type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineStartColor = Globals | DataType.Color;

  export type BorderInlineStartStyle = Globals | DataType.LineStyle;

  export type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStyle = Globals | DataType.LineStyle;

  export type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderLeftColor = Globals | DataType.Color;

  export type BorderLeftStyle = Globals | DataType.LineStyle;

  export type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderRightColor = Globals | DataType.Color;

  export type BorderRightStyle = Globals | DataType.LineStyle;

  export type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderTopColor = Globals | DataType.Color;

  export type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopStyle = Globals | DataType.LineStyle;

  export type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";

  export type BoxDecorationBreak = Globals | "clone" | "slice";

  export type BoxDirection = Globals | "inherit" | "normal" | "reverse";

  export type BoxFlex = Globals | (number & {});

  export type BoxFlexGroup = Globals | (number & {});

  export type BoxLines = Globals | "multiple" | "single";

  export type BoxOrdinalGroup = Globals | (number & {});

  export type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

  export type BoxPack = Globals | "center" | "end" | "justify" | "start";

  export type BoxShadow = Globals | "none" | (string & {});

  export type BoxSizing = Globals | "border-box" | "content-box";

  export type BreakAfter =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakBefore =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

  export type CaptionSide = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

  export type CaretColor = Globals | DataType.Color | "auto";

  export type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type Clip = Globals | "auto" | (string & {});

  export type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});

  export type Color = Globals | DataType.Color;

  export type ColorAdjust = Globals | "economy" | "exact";

  export type ColumnCount = Globals | "auto" | (number & {});

  export type ColumnFill = Globals | "auto" | "balance" | "balance-all";

  export type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type ColumnRuleColor = Globals | DataType.Color;

  export type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});

  export type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type ColumnSpan = Globals | "all" | "none";

  export type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type Contain = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});

  export type Content = Globals | DataType.ContentList | "none" | "normal" | (string & {});

  export type CounterIncrement = Globals | "none" | (string & {});

  export type CounterReset = Globals | "none" | (string & {});

  export type CounterSet = Globals | "none" | (string & {});

  export type Cursor =
    | Globals
    | "-moz-grab"
    | "-webkit-grab"
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    | (string & {});

  export type Direction = Globals | "ltr" | "rtl";

  export type Display =
    | Globals
    | DataType.DisplayOutside
    | DataType.DisplayInside
    | DataType.DisplayInternal
    | DataType.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
    | (string & {});

  export type EmptyCells = Globals | "hide" | "show";

  export type Filter = Globals | "none" | (string & {});

  export type Flex<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "auto"
    | "available"
    | "content"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {})
    | (number & {});

  export type FlexBasis<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-auto"
    | "auto"
    | "available"
    | "content"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";

  export type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});

  export type FlexGrow = Globals | (number & {});

  export type FlexShrink = Globals | (number & {});

  export type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";

  export type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type Font = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | (string & {});

  export type FontFamily = Globals | DataType.GenericFamily | (string & {});

  export type FontFeatureSettings = Globals | "normal" | (string & {});

  export type FontKerning = Globals | "auto" | "none" | "normal";

  export type FontLanguageOverride = Globals | "normal" | (string & {});

  export type FontOpticalSizing = Globals | "auto" | "none";

  export type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "smaller" | (string & {});

  export type FontSizeAdjust = Globals | "none" | (number & {});

  export type FontStretch = Globals | DataType.FontStretchAbsolute;

  export type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});

  export type FontSynthesis = Globals | "none" | "style" | "weight" | (string & {});

  export type FontVariant =
    | Globals
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | (string & {});

  export type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});

  export type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

  export type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});

  export type FontVariantLigatures =
    | Globals
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | (string & {});

  export type FontVariantNumeric =
    | Globals
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | (string & {});

  export type FontVariantPosition = Globals | "normal" | "sub" | "super";

  export type FontVariationSettings = Globals | "normal" | (string & {});

  export type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";

  export type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type Grid = Globals | "none" | (string & {});

  export type GridArea = Globals | DataType.GridLine | (string & {});

  export type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});

  export type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridColumn = Globals | DataType.GridLine | (string & {});

  export type GridColumnEnd = Globals | DataType.GridLine;

  export type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridColumnStart = Globals | DataType.GridLine;

  export type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRow = Globals | DataType.GridLine | (string & {});

  export type GridRowEnd = Globals | DataType.GridLine;

  export type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRowStart = Globals | DataType.GridLine;

  export type GridTemplate = Globals | "none" | (string & {});

  export type GridTemplateAreas = Globals | "none" | (string & {});

  export type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});

  export type Height<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "auto"
    | "available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Hyphens = Globals | "auto" | "manual" | "none";

  export type ImageOrientation = Globals | "flip" | "from-image" | (string & {});

  export type ImageRendering = Globals | "-moz-crisp-edges" | "-o-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";

  export type ImageResolution = Globals | "from-image" | (string & {});

  export type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

  export type InitialLetter = Globals | "normal" | (string & {}) | (number & {});

  export type InlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type Isolation = Globals | "auto" | "isolate";

  export type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});

  export type JustifyItems = Globals | DataType.SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});

  export type JustifySelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});

  export type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";

  export type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";

  export type LineClamp = Globals | "none" | (number & {});

  export type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});

  export type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;

  export type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});

  export type ListStyleImage = Globals | "none" | (string & {});

  export type ListStylePosition = Globals | "inside" | "outside";

  export type ListStyleType = Globals | "none" | (string & {});

  export type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});

  export type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type MaskBorderMode = Globals | "alpha" | "luminance";

  export type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type MaskBorderSlice = Globals | (string & {}) | (number & {});

  export type MaskBorderSource = Globals | "none" | (string & {});

  export type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type MaskClip = Globals | DataType.GeometryBox | "no-clip" | (string & {});

  export type MaskComposite = Globals | DataType.CompositingOperator | (string & {});

  export type MaskImage = Globals | "none" | (string & {});

  export type MaskMode = Globals | DataType.MaskingMode | (string & {});

  export type MaskOrigin = Globals | DataType.Box | "margin-box" | (string & {});

  export type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type MaskType = Globals | "alpha" | "luminance";

  export type MaxBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fill-available"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxLines = Globals | "none" | (number & {});

  export type MaxWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fill-available"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MinBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fill-available"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fill-available"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type MixBlendMode = Globals | DataType.BlendMode;

  export type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.GeometryBox | "auto" | "none" | (string & {});

  export type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type OffsetPath = Globals | DataType.GeometryBox | "none" | (string & {});

  export type OffsetRotate = Globals | "auto" | "reverse" | (string & {});

  export type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

  export type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";

  export type OffsetPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";

  export type Opacity = Globals | (string & {}) | (number & {});

  export type Order = Globals | (number & {});

  export type Orphans = Globals | (number & {});

  export type Outline<TLength = (string & {}) | 0> = Globals | DataType.Color | DataType.LineStyle | DataType.LineWidth<TLength> | "auto" | "invert" | (string & {});

  export type OutlineColor = Globals | DataType.Color | "invert";

  export type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;

  export type OutlineStyle = Globals | DataType.LineStyle | "auto" | (string & {});

  export type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type Overflow = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | (string & {});

  export type OverflowAnchor = Globals | "auto" | "none";

  export type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowClipBox = Globals | "content-box" | "padding-box";

  export type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";

  export type OverflowX = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowY = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});

  export type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";

  export type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakInside = Globals | "auto" | "avoid";

  export type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});

  export type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";

  export type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type PlaceItems = Globals | DataType.SelfPosition | "baseline" | "normal" | "stretch" | (string & {});

  export type PlaceSelf = Globals | DataType.SelfPosition | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

  export type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

  export type Quotes = Globals | "auto" | "none" | (string & {});

  export type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";

  export type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type Rotate = Globals | "none" | (string & {});

  export type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";

  export type RubyMerge = Globals | "auto" | "collapse" | "separate";

  export type RubyPosition = Globals | "over" | "under";

  export type Scale = Globals | "none" | (string & {}) | (number & {});

  export type ScrollBehavior = Globals | "auto" | "smooth";

  export type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});

  export type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});

  export type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type ScrollSnapPointsX = Globals | "none" | (string & {});

  export type ScrollSnapPointsY = Globals | "none" | (string & {});

  export type ScrollSnapStop = Globals | "always" | "normal";

  export type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});

  export type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";

  export type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";

  export type ScrollbarColor = Globals | DataType.Color | "auto" | "dark" | "light";

  export type ScrollbarWidth = Globals | "auto" | "none" | "thin";

  export type ShapeImageThreshold = Globals | (string & {}) | (number & {});

  export type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ShapeOutside = Globals | DataType.Box | "margin-box" | "none" | (string & {});

  export type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {});

  export type TableLayout = Globals | "auto" | "fixed";

  export type TextAlign = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

  export type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

  export type TextCombineUpright = Globals | "all" | "digits" | "none" | (string & {});

  export type TextDecoration<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Color
    | TLength
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy"
    | (string & {});

  export type TextDecorationColor = Globals | DataType.Color;

  export type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});

  export type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});

  export type TextDecorationSkipInk = Globals | "auto" | "none";

  export type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

  export type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font";

  export type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextEmphasisColor = Globals | DataType.Color;

  export type TextEmphasisPosition = Globals | (string & {});

  export type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type TextJustify = Globals | "auto" | "inter-character" | "inter-word" | "none";

  export type TextOrientation = Globals | "mixed" | "sideways" | "upright";

  export type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});

  export type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

  export type TextShadow = Globals | "none" | (string & {});

  export type TextSizeAdjust = Globals | "auto" | "none" | (string & {});

  export type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "none" | "uppercase";

  export type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font";

  export type TextUnderlinePosition = Globals | "auto" | "left" | "right" | "under" | (string & {});

  export type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type TouchAction =
    | Globals
    | "-ms-manipulation"
    | "-ms-none"
    | "-ms-pinch-zoom"
    | "auto"
    | "manipulation"
    | "none"
    | "pan-down"
    | "pan-left"
    | "pan-right"
    | "pan-up"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom"
    | (string & {});

  export type Transform = Globals | "none" | (string & {});

  export type TransformBox = Globals | "border-box" | "fill-box" | "view-box";

  export type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  export type TransformStyle = Globals | "flat" | "preserve-3d";

  export type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});

  export type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionProperty = Globals | "all" | "none" | (string & {});

  export type TransitionTimingFunction = Globals | DataType.TimingFunction | (string & {});

  export type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type UnicodeBidi =
    | Globals
    | "-moz-isolate"
    | "-moz-isolate-override"
    | "-moz-plaintext"
    | "-webkit-isolate"
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";

  export type UserSelect = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";

  export type VerticalAlign<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | (string & {});

  export type Visibility = Globals | "collapse" | "hidden" | "visible";

  export type WhiteSpace = Globals | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

  export type Widows = Globals | (number & {});

  export type Width<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "auto"
    | "available"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});

  export type WordBreak = Globals | "break-all" | "break-word" | "keep-all" | "normal";

  export type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type WordWrap = Globals | "break-word" | "normal";

  export type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

  export type ZIndex = Globals | "auto" | (number & {});

  export type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});

  export type MozAppearance =
    | Globals
    | "-moz-mac-unified-toolbar"
    | "-moz-win-borderless-glass"
    | "-moz-win-browsertabbar-toolbox"
    | "-moz-win-communications-toolbox"
    | "-moz-win-communicationstext"
    | "-moz-win-exclude-glass"
    | "-moz-win-glass"
    | "-moz-win-media-toolbox"
    | "-moz-win-mediatext"
    | "-moz-window-button-box"
    | "-moz-window-button-box-maximized"
    | "-moz-window-button-close"
    | "-moz-window-button-maximize"
    | "-moz-window-button-minimize"
    | "-moz-window-button-restore"
    | "-moz-window-frame-bottom"
    | "-moz-window-frame-left"
    | "-moz-window-frame-right"
    | "-moz-window-titlebar"
    | "-moz-window-titlebar-maximized"
    | "button"
    | "button-arrow-down"
    | "button-arrow-next"
    | "button-arrow-previous"
    | "button-arrow-up"
    | "button-bevel"
    | "button-focus"
    | "caret"
    | "checkbox"
    | "checkbox-container"
    | "checkbox-label"
    | "checkmenuitem"
    | "dualbutton"
    | "groupbox"
    | "listbox"
    | "listitem"
    | "menuarrow"
    | "menubar"
    | "menucheckbox"
    | "menuimage"
    | "menuitem"
    | "menuitemtext"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "menupopup"
    | "menuradio"
    | "menuseparator"
    | "meterbar"
    | "meterchunk"
    | "none"
    | "progressbar"
    | "progressbar-vertical"
    | "progresschunk"
    | "progresschunk-vertical"
    | "radio"
    | "radio-container"
    | "radio-label"
    | "radiomenuitem"
    | "range"
    | "range-thumb"
    | "resizer"
    | "resizerpanel"
    | "scale-horizontal"
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
    | "scrollbarthumb-horizontal"
    | "scrollbarthumb-vertical"
    | "scrollbartrack-horizontal"
    | "scrollbartrack-vertical"
    | "searchfield"
    | "separator"
    | "sheet"
    | "spinner"
    | "spinner-downbutton"
    | "spinner-textfield"
    | "spinner-upbutton"
    | "splitter"
    | "statusbar"
    | "statusbarpanel"
    | "tab"
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
    | "textfield"
    | "textfield-multiline"
    | "toolbar"
    | "toolbarbutton"
    | "toolbarbutton-dropdown"
    | "toolbargripper"
    | "toolbox"
    | "tooltip"
    | "treeheader"
    | "treeheadercell"
    | "treeheadersortarrow"
    | "treeitem"
    | "treeline"
    | "treetwisty"
    | "treetwistyopen"
    | "treeview";

  export type MozBinding = Globals | "none" | (string & {});

  export type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});

  export type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});

  export type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

  export type MozForceBrokenImageIcon = Globals | (number & {});

  export type MozImageRegion = Globals | "auto" | (string & {});

  export type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";

  export type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozStackSizing = Globals | "ignore" | "stretch-to-fit";

  export type MozTextBlink = Globals | "blink" | "none";

  export type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

  export type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";

  export type MozUserModify = Globals | "read-only" | "read-write" | "write-only";

  export type MozWindowDragging = Globals | "drag" | "no-drag";

  export type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

  export type MsAccelerator = Globals | "false" | "true";

  export type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";

  export type MsContentZoomChaining = Globals | "chained" | "none";

  export type MsContentZoomLimit = Globals | (string & {});

  export type MsContentZoomLimitMax = Globals | (string & {});

  export type MsContentZoomLimitMin = Globals | (string & {});

  export type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});

  export type MsContentZoomSnapPoints = Globals | (string & {});

  export type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsContentZooming = Globals | "none" | "zoom";

  export type MsFilter = Globals | (string & {});

  export type MsFlowFrom = Globals | "none" | (string & {});

  export type MsFlowInto = Globals | "none" | (string & {});

  export type MsHighContrastAdjust = Globals | "auto" | "none";

  export type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});

  export type MsHyphenateLimitLines = Globals | "no-limit" | (number & {});

  export type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MsImeAlign = Globals | "after" | "auto";

  export type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

  export type MsScrollChaining = Globals | "chained" | "none";

  export type MsScrollLimit = Globals | (string & {});

  export type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollRails = Globals | "none" | "railed";

  export type MsScrollSnapPointsX = Globals | (string & {});

  export type MsScrollSnapPointsY = Globals | (string & {});

  export type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsScrollSnapX = Globals | (string & {});

  export type MsScrollSnapY = Globals | (string & {});

  export type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";

  export type MsScrollbar3dlightColor = Globals | DataType.Color;

  export type MsScrollbarArrowColor = Globals | DataType.Color;

  export type MsScrollbarBaseColor = Globals | DataType.Color;

  export type MsScrollbarDarkshadowColor = Globals | DataType.Color;

  export type MsScrollbarFaceColor = Globals | DataType.Color;

  export type MsScrollbarHighlightColor = Globals | DataType.Color;

  export type MsScrollbarShadowColor = Globals | DataType.Color;

  export type MsScrollbarTrackColor = Globals | DataType.Color;

  export type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

  export type MsTouchSelect = Globals | "grippers" | "none";

  export type MsUserSelect = Globals | "element" | "none" | "text";

  export type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

  export type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsWrapThrough = Globals | "none" | "wrap";

  export type WebkitAppearance =
    | Globals
    | "button"
    | "button-bevel"
    | "caret"
    | "checkbox"
    | "default-button"
    | "inner-spin-button"
    | "listbox"
    | "listitem"
    | "media-controls-background"
    | "media-controls-fullscreen-background"
    | "media-current-time-display"
    | "media-enter-fullscreen-button"
    | "media-exit-fullscreen-button"
    | "media-fullscreen-button"
    | "media-mute-button"
    | "media-overlay-play-button"
    | "media-play-button"
    | "media-seek-back-button"
    | "media-seek-forward-button"
    | "media-slider"
    | "media-sliderthumb"
    | "media-time-remaining-display"
    | "media-toggle-closed-captions-button"
    | "media-volume-slider"
    | "media-volume-slider-container"
    | "media-volume-sliderthumb"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "meter"
    | "none"
    | "progress-bar"
    | "progress-bar-value"
    | "push-button"
    | "radio"
    | "searchfield"
    | "searchfield-cancel-button"
    | "searchfield-decoration"
    | "searchfield-results-button"
    | "searchfield-results-decoration"
    | "slider-horizontal"
    | "slider-vertical"
    | "sliderthumb-horizontal"
    | "sliderthumb-vertical"
    | "square-button"
    | "textarea"
    | "textfield";

  export type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type WebkitBorderBeforeColor = Globals | DataType.Color;

  export type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});

  export type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});

  export type WebkitLineClamp = Globals | "none" | (number & {});

  export type WebkitMask<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Position<TLength>
    | DataType.RepeatStyle
    | DataType.Box
    | "border"
    | "content"
    | "none"
    | "padding"
    | "text"
    | (string & {});

  export type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});

  export type WebkitMaskClip = Globals | DataType.Box | "border" | "content" | "padding" | "text" | (string & {});

  export type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});

  export type WebkitMaskImage = Globals | "none" | (string & {});

  export type WebkitMaskOrigin = Globals | DataType.Box | "border" | "content" | "padding" | (string & {});

  export type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});

  export type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});

  export type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type WebkitOverflowScrolling = Globals | "auto" | "touch";

  export type WebkitTapHighlightColor = Globals | DataType.Color;

  export type WebkitTextFillColor = Globals | DataType.Color;

  export type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});

  export type WebkitTextStrokeColor = Globals | DataType.Color;

  export type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;

  export type WebkitTouchCallout = Globals | "default" | "none";

  export type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

  export type AlignmentBaseline =
    | Globals
    | "after-edge"
    | "alphabetic"
    | "auto"
    | "baseline"
    | "before-edge"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "text-after-edge"
    | "text-before-edge";

  export type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});

  export type ClipRule = Globals | "evenodd" | "nonzero";

  export type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";

  export type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

  export type DominantBaseline =
    | Globals
    | "alphabetic"
    | "auto"
    | "central"
    | "hanging"
    | "ideographic"
    | "mathematical"
    | "middle"
    | "no-change"
    | "reset-size"
    | "text-after-edge"
    | "text-before-edge"
    | "use-script";

  export type Fill = Globals | DataType.Paint;

  export type FillOpacity = Globals | (number & {});

  export type FillRule = Globals | "evenodd" | "nonzero";

  export type FloodColor = Globals | DataType.Color | "currentColor";

  export type FloodOpacity = Globals | (number & {});

  export type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});

  export type LightingColor = Globals | DataType.Color | "currentColor";

  export type Marker = Globals | "none" | (string & {});

  export type MarkerEnd = Globals | "none" | (string & {});

  export type MarkerMid = Globals | "none" | (string & {});

  export type MarkerStart = Globals | "none" | (string & {});

  export type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

  export type StopColor = Globals | DataType.Color | "currentColor";

  export type StopOpacity = Globals | (number & {});

  export type Stroke = Globals | DataType.Paint;

  export type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";

  export type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type StrokeLinecap = Globals | "butt" | "round" | "square";

  export type StrokeLinejoin = Globals | "bevel" | "miter" | "round";

  export type StrokeMiterlimit = Globals | (number & {});

  export type StrokeOpacity = Globals | (number & {});

  export type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type TextAnchor = Globals | "end" | "middle" | "start";

  export type VectorEffect = Globals | "non-scaling-stroke" | "none";
}

export namespace AtRule {
  export interface CounterStyle<TLength = (string & {}) | 0, TTime = string & {}> {
    additiveSymbols?: string;
    fallback?: string;
    negative?: string;
    pad?: string;
    prefix?: string;
    range?: Range;
    speakAs?: SpeakAs;
    suffix?: string;
    symbols?: string;
    system?: System;
  }

  export interface CounterStyleHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
    "additive-symbols"?: string;
    fallback?: string;
    negative?: string;
    pad?: string;
    prefix?: string;
    range?: Range;
    "speak-as"?: SpeakAs;
    suffix?: string;
    symbols?: string;
    system?: System;
  }

  export type CounterStyleFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof CounterStyle<TLength, TTime>]: CounterStyle<TLength, TTime>[P] | CounterStyle<TLength, TTime>[P][];
  };

  export type CounterStyleHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof CounterStyleHyphen<TLength, TTime>]: CounterStyleHyphen<TLength, TTime>[P] | CounterStyleHyphen<TLength, TTime>[P][];
  };

  export interface FontFace<TLength = (string & {}) | 0, TTime = string & {}> {
    MozFontFeatureSettings?: FontFeatureSettings;
    fontDisplay?: FontDisplay;
    fontFamily?: string;
    fontFeatureSettings?: FontFeatureSettings;
    fontStretch?: FontStretch;
    fontStyle?: FontStyle;
    fontVariant?: FontVariant;
    fontVariationSettings?: FontVariationSettings;
    fontWeight?: FontWeight;
    src?: string;
    unicodeRange?: string;
  }

  export interface FontFaceHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
    "-moz-font-feature-settings"?: FontFeatureSettings;
    "font-display"?: FontDisplay;
    "font-family"?: string;
    "font-feature-settings"?: FontFeatureSettings;
    "font-stretch"?: FontStretch;
    "font-style"?: FontStyle;
    "font-variant"?: FontVariant;
    "font-variation-settings"?: FontVariationSettings;
    "font-weight"?: FontWeight;
    src?: string;
    "unicode-range"?: string;
  }

  export type FontFaceFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof FontFace<TLength, TTime>]: FontFace<TLength, TTime>[P] | FontFace<TLength, TTime>[P][];
  };

  export type FontFaceHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof FontFaceHyphen<TLength, TTime>]: FontFaceHyphen<TLength, TTime>[P] | FontFaceHyphen<TLength, TTime>[P][];
  };

  export interface Viewport<TLength = (string & {}) | 0, TTime = string & {}> {
    msHeight?: Height<TLength>;
    msMaxHeight?: MaxHeight<TLength>;
    msMaxWidth?: MaxWidth<TLength>;
    msMaxZoom?: MaxZoom;
    msMinHeight?: MinHeight<TLength>;
    msMinWidth?: MinWidth<TLength>;
    msMinZoom?: MinZoom;
    msOrientation?: Orientation;
    msUserZoom?: UserZoom;
    msWidth?: Width<TLength>;
    msZoom?: Zoom;
    OOrientation?: Orientation;
    height?: Height<TLength>;
    maxHeight?: MaxHeight<TLength>;
    maxWidth?: MaxWidth<TLength>;
    maxZoom?: MaxZoom;
    minHeight?: MinHeight<TLength>;
    minWidth?: MinWidth<TLength>;
    minZoom?: MinZoom;
    orientation?: Orientation;
    userZoom?: UserZoom;
    width?: Width<TLength>;
    zoom?: Zoom;
  }

  export interface ViewportHyphen<TLength = (string & {}) | 0, TTime = string & {}> {
    "-ms-height"?: Height<TLength>;
    "-ms-max-height"?: MaxHeight<TLength>;
    "-ms-max-width"?: MaxWidth<TLength>;
    "-ms-max-zoom"?: MaxZoom;
    "-ms-min-height"?: MinHeight<TLength>;
    "-ms-min-width"?: MinWidth<TLength>;
    "-ms-min-zoom"?: MinZoom;
    "-ms-orientation"?: Orientation;
    "-ms-user-zoom"?: UserZoom;
    "-ms-width"?: Width<TLength>;
    "-ms-zoom"?: Zoom;
    "-o-orientation"?: Orientation;
    height?: Height<TLength>;
    "max-height"?: MaxHeight<TLength>;
    "max-width"?: MaxWidth<TLength>;
    "max-zoom"?: MaxZoom;
    "min-height"?: MinHeight<TLength>;
    "min-width"?: MinWidth<TLength>;
    "min-zoom"?: MinZoom;
    orientation?: Orientation;
    "user-zoom"?: UserZoom;
    width?: Width<TLength>;
    zoom?: Zoom;
  }

  export type ViewportFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof Viewport<TLength, TTime>]: Viewport<TLength, TTime>[P] | Viewport<TLength, TTime>[P][];
  };

  export type ViewportHyphenFallback<TLength = (string & {}) | 0, TTime = string & {}> = {
    [P in keyof ViewportHyphen<TLength, TTime>]: ViewportHyphen<TLength, TTime>[P] | ViewportHyphen<TLength, TTime>[P][];
  };

  type Range = "auto" | "infinite" | (string & {}) | (number & {});

  type SpeakAs = "auto" | "bullets" | "numbers" | "spell-out" | "words" | (string & {});

  type System = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | (string & {});

  type FontFeatureSettings = "normal" | (string & {});

  type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";

  type FontStretch = DataType.FontStretchAbsolute | (string & {});

  type FontStyle = "italic" | "normal" | "oblique" | (string & {});

  type FontVariant =
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | (string & {});

  type FontVariationSettings = "normal" | (string & {});

  type FontWeight = DataType.FontWeightAbsolute | (string & {});

  type Height<TLength> = DataType.ViewportLength<TLength> | (string & {});

  type MaxHeight<TLength> = DataType.ViewportLength<TLength>;

  type MaxWidth<TLength> = DataType.ViewportLength<TLength>;

  type MaxZoom = "auto" | (string & {}) | (number & {});

  type MinHeight<TLength> = DataType.ViewportLength<TLength>;

  type MinWidth<TLength> = DataType.ViewportLength<TLength>;

  type MinZoom = "auto" | (string & {}) | (number & {});

  type Orientation = "auto" | "landscape" | "portrait";

  type UserZoom = "-ms-zoom" | "fixed" | "zoom";

  type Width<TLength> = DataType.ViewportLength<TLength> | (string & {});

  type Zoom = "auto" | (string & {}) | (number & {});
}

declare namespace DataType {
  type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";

  type AnimateableFeature = "contents" | "scroll-position" | (string & {});

  type Attachment = "fixed" | "local" | "scroll";

  type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});

  type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";

  type Box = "border-box" | "content-box" | "padding-box";

  type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | (string & {});

  type Compat =
    | "button-bevel"
    | "checkbox"
    | "listbox"
    | "menulist"
    | "menulist-button"
    | "meter"
    | "progress-bar"
    | "push-button"
    | "radio"
    | "searchfield"
    | "slider-horizontal"
    | "square-button"
    | "textarea";

  type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";

  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";

  type ContentList = Quote | "contents" | (string & {});

  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

  type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});

  type Dasharray<TLength> = TLength | (string & {}) | (number & {});

  type DeprecatedSystemColor =
    | "ActiveBorder"
    | "ActiveCaption"
    | "AppWorkspace"
    | "Background"
    | "ButtonFace"
    | "ButtonHighlight"
    | "ButtonShadow"
    | "ButtonText"
    | "CaptionText"
    | "GrayText"
    | "Highlight"
    | "HighlightText"
    | "InactiveBorder"
    | "InactiveCaption"
    | "InactiveCaptionText"
    | "InfoBackground"
    | "InfoText"
    | "Menu"
    | "MenuText"
    | "Scrollbar"
    | "ThreeDDarkShadow"
    | "ThreeDFace"
    | "ThreeDHighlight"
    | "ThreeDLightShadow"
    | "ThreeDShadow"
    | "Window"
    | "WindowFrame"
    | "WindowText";

  type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";

  type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

  type DisplayOutside = "block" | "inline" | "run-in";

  type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

  type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | (string & {});

  type FontStretchAbsolute =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});

  type FontWeightAbsolute = "bold" | "normal" | (number & {});

  type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

  type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";

  type GridLine = "auto" | (string & {}) | (number & {});

  type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

  type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";

  type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});

  type MaskingMode = "alpha" | "luminance" | "match-source";

  type NamedColor =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "transparent"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

  type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | (string & {});

  type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

  type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});

  type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";

  type SingleAnimation<TTime> =
    | TimingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | TTime
    | "infinite"
    | "none"
    | "paused"
    | "running"
    | (string & {})
    | (number & {});

  type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  type SingleTransition<TTime> = TimingFunction | TTime | "all" | "none" | (string & {});

  type StepTimingFunction = "step-end" | "step-start" | (string & {});

  type TimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear";

  type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});

  type ViewportLength<TLength> = TLength | "auto" | (string & {});
}
