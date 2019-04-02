import Canvas from "./Library/Canvas.js";
import Tests from "./Tests/Tests.js";

/** Class for the application. */
export default class Application {
  /**
   * Create a new application.
   */
  constructor() {
    const tests = false;
    if (tests) {
      new Tests();
    }
    console.info("WebGL2 Demo");

    this.shaderSources = {
      fragment: null,
      vertex: null
    };
    this.preloader();
  }

  /**
   * Load assets using async and await
   * Catch and log errors in console
   */
  async preloader() {
    console.info("Preloading source code for shaders");
    await fetch("./assets/glsl/vertex-shader.glsl")
      .then(response => response.text())
      .then(source => (this.shaderSources.vertex = source))
      .catch(error => console.error(error.message));
    await fetch("./assets/glsl/fragment-shader.glsl")
      .then(response => response.text())
      .then(source => (this.shaderSources.fragment = source))
      .catch(error => console.error(error.message));
    this.run();
  }

  /**
   * Create canvas
   * application will run in this area
   */
  run() {
    const width = 400;
    const height = 400;

    new Canvas(width, height, this.shaderSources);
  }
}
