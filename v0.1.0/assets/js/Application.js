import Tests from './Tests/Tests.js'

/**
 * Application class
 */
export default class Application {

  /**
   * Create a new application
   */
  constructor() {
    const tests = true
    if (tests) {
      new Tests()
    }
  }
}