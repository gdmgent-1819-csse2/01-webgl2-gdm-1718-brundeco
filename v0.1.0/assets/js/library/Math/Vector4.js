import Matrix4 from './Matrix4.js'

export default class Vector4 {
  /**
   * 4D vector
   * @param {Number} x_p - x axis pos
   * @param {Number} y_p - y axis pos
   * @param {Number} z_p - z axis pos
   * @param {Number} w_p - w axis pos
   */
   
  constructor(x_p, y_p, z_p, w_p) {
    this.x = Number(x_p) || 0
    this.y = Number(y_p) || 0
    this.z = Number(z_p) || 0
    this.w = Number(w_p) || 0
  }


  /**
   * Vector addition
   * @param {Vector4} v - Second vector
   */

  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    this.w += v.w
  }


  /**
   * Vector subtraction
   * @param {Vector4} v - Second vector
   */

  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
  }


  /**
   * Scalar
   * @param {Number} a - Multiply by a
   */
  
  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
    this.w *= a
  }


  /**
   * Length of the vector
   */

  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.w, 2))
  }


  /**
   * Dot product 
   * @param {Vector4} v - Second vector
   */

  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w)
  }


  /**
   * Vector rotation
   * @param {Number} a - Counter clockwise
   */

  rot(a) {
    const m = new Matrix4([
      this.x, 0, 0, 0,
      this.y, 0, 0, 0,
      this.z, 0, 0, 0,
      this.w, 0, 0, 0,
    ])
    m.rot(a)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[4]
    this.z = m.items[8]
    this.w = m.items[12]
  }
}