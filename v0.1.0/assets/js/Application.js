import Tests from './Tests/Tests.js'
import Canvas from './Library/Canvas.js';

/**
 * Application class
 */
export default class Application {

  /**
   * Create a new application
   */
  constructor() {
    const tests = false
    if (tests) {
      new Tests()
    }
    console.info('WebGL2 Demo')

    this.shaderSources = {
      fragment: null,
      vertex: null
    }
    this.preloader()
  }

  async preloader() {
    console.log('hey daaar')
    await fetch('../assets/glsl/vertex-shader.glsl')
      .then(source => this.shaderSources.vertex = source)
      .catch(error => console.error(error.message))

    await fetch('../assets/glsl/vertex-shader.glsl')
      .then(source => this.shaderSources.fragment = source)
      .catch(error => console.error(error.message))
    this.run()
  }

  run() {
    new Canvas(document.body.clientWidth, document.body.clientHeight, this.shaderSources)
  }

}