import Matrix2 from './Matrix2.js'

export default class Vector2 {

  /**
   * 2D vector
   * @param {Number} x_p - x axis pos
   * @param {Number} y_p - y axis pos
   */

  constructor(x_p, y_p) {
    this.x = Number(x_p) || 0
    this.y = Number(y_p) || 0
  }


  /**
   * Vector length
   */

  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }


  /**
   * Dot product
   * @param {Vector2} v - Second vector
   */

  dot(v) {
    return (this.x * v.x) + (this.y * v.y)
  }


  /**
   * Addition
   * @param {Vector2} v 
   */

  add(v) {
    this.x += v.x
    this.y += v.y
  }


  /**
   * Subtraction
   * @param {Vector2} v 
   */

  sub(v) {
    this.x -= v.x
    this.y -= v.y
  }


  /**
   * Scalar
   * @param {Number} a 
   */

  scalar(a) {
    this.x *= a
    this.y *= a
  }


  /**
   * Vector rotation
   * @param {Number} a - Counter clockwise
   */

  rot(a) {
    const m = new Matrix2([this.x, 0, this.y, 0])
    m.rot(a)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[2]
  }
}