import Vector3 from '../../../library/Math/Vector3.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test Vector3
 */
export default class TestVector3 extends TestMatrix {
  /**
   * Create and run tests
   */

  constructor() {
    super()
    console.info("Testing Vector3")
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  
  /**
   * Test Vector3 addition
   */

  testAdd() {
    console.info("Test: Vector3 addition")
    const a = new Vector3(2, 4, 6)
    const b = new Vector3(4, 5, 6)

    const expected = [6, 9, 12]

    a.add(b)
    const actual = [a.x, a.y, a.z]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector3 subtraction
   */

  testSub() {
    console.info("Test: Vector3 subtraction")
    const a = new Vector3(1, 4, 6)
    const b = new Vector3(4, 8, 6)

    const expected = [-3, -4, 0]

    a.sub(b)
    const actual = [a.x, a.y, a.z]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector3 norm - length 
   */

  testNorm() {
    console.info("Test: Vector3 norm - length")
    const a = new Vector3(3, 4, 5)

    const expected = [7]

    const actual = [a.norm()]
    this.assertIdenticalRounded(actual, expected)
  }


  /**
   * Test Vector3 dot
   */

  testDot() {
    console.info("Test: Vector3 dot")
    const a = new Vector3(1, 2, 3)
    const b = new Vector3(4, 5, 6)

    const expected = [32]

    const actual = [a.dot(b)]
    this.assertIdentical(actual, expected)
  }


    /**
   * Test Vector3 scalar
   */

  testScalar() {
    console.info("Test: Vector3 subtraction")
    const a = new Vector3(2, 5, 8)
    const s = 10

    const expected = [20, 50, 80]

    a.scalar(s)
    const actual = [a.x, a.y, a.z]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector3 rotation
   */
  
  testRot() {
    console.info("Test: Vector4 rotation")
    const a = new Vector3(2, 4, 6)
    const α = 90

    const expected = [0, 0, 0]

    a.rot(α)
    const actual = [a.x, a.y, a.z]
    this.assertIdenticalRounded(actual, expected)
  }
}