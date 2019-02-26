import Matrix3 from './Matrix3.js'

export default class Vector3 {

  /**
   * Create a three dimensional vector
   * @param {Number} x_p - x axis pos
   * @param {Number} y_p - y axis pos
   * @param {Number} z_p - z axis pos
   */

  constructor(x_p, y_p, z_p) {
    this.x = Number(x_p) || 0
    this.y = Number(y_p) || 0
    this.z = Number(z_p) || 0
  }


    /**
   * Vector length
   */

  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
  }


  /**
   * Addition
   * @param {Vector3} v - Second vector
   */

  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
  }

  /**
   * Subtraction
   * @param {Vector3} v - Second vector
   */

  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
  }

  /**
   * Scalar
   * @param {Number} a - Number to multiply by
   */

  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
  }

  /**
   * Dot product
   * @param {Vector2} v - Second vector
   */

  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }

  /**
   * Vector rotation
   * @param {Number} a - Counter clockwise
   */

  rot(a) {
    const m = new Matrix3([
      this.x, 0, 0,
      this.y, 0, 0,
      this.z, 0, 0
    ])
    m.rot(a)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[3]
    this.z = m.items[6]
  }
}