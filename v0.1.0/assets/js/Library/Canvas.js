export default class Canvas {
  constructor(width, height, shaderSources) {
    this.width = width;
    this.height = height;
    this.shaderSources = shaderSources;

    this.gl = null;
    this.program = null;

    this.run();
  }

  run() {
    try {
      this.createCanvas();
      this.createShaders();
      this.createProgram();
      this.createBuffers();
    } catch (error) {
      console.error(error);
    }
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = this.width;
    canvas.height = this.height;
    this.gl = canvas.getContext("webgl2");
  }

  createShaders() {
    const gl = this.gl;

    this.vertexShader = this.createShader(gl.VERTEX_SHADER);
  }

  createShader(type) {
    const gl = this.gl;
    let source;
    switch (type) {
      case gl.VERTEX_SHADER:
        source = this.shaderSources.vertex;
        break;

      case gl.FRAGMENT_SHADER:
        source = this.shaderSources.fragment;
        break;

      default:
        console.error("Shader type does not exist");
        return;
    }

    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const succes = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (succes) {
      return shader;
    }

    console.error(type, gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  createProgram() {
    const gl = this.gl;

    const program = this.createProgram();
    gl.attachShader(program, this.vertexShader);
    gl.attachShader(program, this.fragmentShader);
    gl.linkProgram(program);

    const succes = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (status) {
      this.program = program;
    } else {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
    }
  }

  createBuffers() {
    const gl = this.gl;
    const program = this.program;

    /** raw data for buffers */
    const colors = [];
    const positions = [];

    /** position buffer */
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_VertexPosition"
    );

    gl.enableVertexAttribArray(positionAttributeLocation);
    {
      const size = 4;
      const type = gl.UNSIGNED_BYTE;
      const normalized = true;
      const stride = 0;
      const offset = 0;
      gl.vertexAttribPointer(
        positionAttributeLocation,
        size,
        type,
        normalized,
        stride,
        offset
      );
    }

    /** color buffer */
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(colors), gl.STATIC_DRAW);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0)
    gl.useProgram(program)

    const vertexArray = gl.createVertex
    gl.bindVertexArray(vertexArray)

        const mode = gl.POINTS
        const first = 0
        const count = position.length / 2
        gl.drawArrays(mode, first, count)    
  }
}
