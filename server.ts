
import http from 'http';
import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import { projects } from './libs/templates/navbar';

// Ensure that a temp folder exists to webpack into before serving.
const tempFolder = path.resolve(__dirname, 'temp');
fs.mkdirSync(tempFolder, { recursive: true });

// Define the server - we will use this to serve the webpack bundle.
const server = http.createServer((req, res) => {
    console.log('Request received:', req.url);
    if (req.url != null) {
        let projectName = req.url.replace('/', '') as keyof typeof projects;
        if (projectName.length == 0) {
            projectName = 'hub';
        }
        console.log(`Request for ${req.url}`);
        const project = projects[projectName];
        const webpackOutputName = 'webpack_result.js';
        if (project != null) {
            webpack({
                mode: 'development',
                entry: { ['index']: `./projects/${projectName}/index.ts` },
                module: { rules: [{ test: /\.tsx?$/, use: { loader: 'ts-loader', options: { transpileOnly: true } } }] },
                resolve: { extensions: ['.ts'] },
                target: 'node',
                output: { path: tempFolder, filename: webpackOutputName },
            }, (err, stats) => {
                if (err)
                    console.log(err);
                if (stats)
                    console.log(stats.toString());
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(stubHTML(fs.readFileSync(path.resolve(tempFolder, webpackOutputName), 'utf8')));
                res.end();
            });
        }
    }
});

// Wrap the output of the webpack bundle in a stub HTML file.
const stubHTML = (scriptContents: string) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hub</title>
        <style>
            body {
                background-color: #1e1e1e;
                color: #d4d4d4;
            }
        </style>
    </head>
    <body>
        <script>${scriptContents}</script>
    </body>
</html>
`;

// Start the server.
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
