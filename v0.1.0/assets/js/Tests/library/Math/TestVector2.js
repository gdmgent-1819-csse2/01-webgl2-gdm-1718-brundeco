import Vector2 from '../../../library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test Vector2
 */
export default class TestVector2 extends TestMatrix {
  /**
   * Create and run tests
   */
  constructor() {
    super()
    console.info("Testing Vector2")
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }


  /**
   * Test Vector2 addition
   */

  testAdd() {
    console.info("Test: Vector2 addition")
    const a = new Vector2(1.5, 2.5)

    const b = new Vector2(3, 4)

    const expected = [4.5, 6.5]

    a.add(b)
    const actual = [a.x, a.y]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector2 subtraction
   */

  testSub() {
    console.info("Test: Vector2 subtraction")
    const a = new Vector2(2, 4)

    const b = new Vector2(4, 7)

    const expected = [-2, -3]

    a.sub(b)
    const actual = [a.x, a.y]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector2 scalar
   */

  testScalar() {
    console.info("Test: Vector2 scalar")
    const a = new Vector2(1, 2)

    const s = 4

    const expected = [4, 8]

    a.scalar(s)
    const actual = [a.x, a.y]
    this.assertIdentical(actual, expected)
  }


  /**
   * Test Vector2 norm - length of vector
   */

  testNorm() {
    console.info("Test: Vector2 norm - length")
    const a = new Vector2(3, 2)

    const expected = [4]

    const actual = [a.norm()]
    this.assertIdenticalRounded(actual, expected)
  }


  /**
   * Test Vector2 dot
   */

  testDot() {
    console.info("Test: Vector2 dot")
    const a = new Vector2(4, 5)

    const b = new Vector2(3, 6)

    const expected = [42]

    const actual = [a.dot(b)]
    this.assertIdentical(actual, expected)
  }

  testRot() {
    console.info("Test: Vector2 rotation")
    const a = new Vector2(1, 2)

    const α = 180

    const expected = [-1, -2]

    a.rot(α)
    const actual = [a.x, a.y]
    this.assertIdenticalRounded(actual, expected)
  }
}