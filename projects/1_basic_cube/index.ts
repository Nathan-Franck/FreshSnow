import { degToRad } from "../../libs/math/basic";
import { m4 } from "../../libs/math/m4";
import { v3 } from "../../libs/math/v3";
import { initDocumentDarkMode } from "../../libs/templates/darkMode";
import { renderDemo } from "../../libs/templates/renderDemo";
import { cubeMesh } from "./cubeMesh";

const renderCube = () => {
    initDocumentDarkMode();
    const renderDemoElements = renderDemo(document.body);
    const gl = renderDemoElements.canvas.getContext("webgl2");
    if (gl == null)
        throw new Error("WebGL2 not supported.");

    // Render a simple cube at an angle.
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (vertexShader == null)
        throw new Error("Failed to create vertex shader.");
    gl.shaderSource(vertexShader, `
        attribute vec3 a_position;
        attribute vec3 a_normal;
        varying vec3 v_normal;
        uniform mat4 u_matrix;
        void main() {
            gl_Position = u_matrix * vec4(a_position, 1);
            v_normal = a_normal;
        }
    `);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (fragmentShader == null)
        throw new Error("Failed to create fragment shader.");
    // Simple light shading for now.
    gl.shaderSource(fragmentShader, `
        precision mediump float;
        varying vec3 v_normal;

        void main() {
            vec3 light = normalize(vec3(0.5, 0.7, 1));
            float diffuse = max(dot(v_normal, light), 0.1);
            gl_FragColor = vec4(vec3(diffuse), 1);
        }
    `);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragmentShader));
        return;
    }

    const program = gl.createProgram();
    if (program == null)
        return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
    }

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const normalAttributeLocation = gl.getAttribLocation(program, "a_normal");
    const matrixUniformLocation = gl.getUniformLocation(program, "u_matrix");

    const positionBuffer = gl.createBuffer();
    if (positionBuffer == null)
        return;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeMesh.positions), gl.STATIC_DRAW);

    const normalBuffer = gl.createBuffer();
    if (normalBuffer == null)
        return;
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeMesh.normals), gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    if (vao == null)
        throw new Error("Failed to create vertex array object.");
    gl.bindVertexArray(vao);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(normalAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    const projectionMatrix = m4.perspective(degToRad(60), gl.canvas.clientWidth / gl.canvas.clientHeight, 1, 2000);

    const cameraPosition: v3 = [0, 0, 20];
    const up: v3 = [0, 1, 0];
    const target: v3 = [0, 0, 0];

    const cameraMatrix = m4.lookAt(cameraPosition, target, up);
    const viewMatrix = m4.inverse(cameraMatrix);

    const viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

    gl.useProgram(program);
    gl.uniformMatrix4fv(matrixUniformLocation, false, viewProjectionMatrix.flat());

    const drawScene = () => {

        // Clear the canvas
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Draw the cube.
        gl.bindVertexArray(vao);
        gl.drawArrays(gl.TRIANGLES, 0, cubeMesh.positions.length / 3);

        requestAnimationFrame(drawScene);

        console.table (viewProjectionMatrix.flat());
    };

    requestAnimationFrame(drawScene);
};

renderCube();