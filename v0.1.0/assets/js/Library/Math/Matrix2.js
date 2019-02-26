export default class Matrix2 {

  /**
   * 2D matrix
   * @param {*} items - Matrix values
   */

  constructor(items) {
    this.items = items || [
      0, 0,
      0, 0,
    ]
  }


  /**
   * Matrix addition
   * @param {Matrix2} b - 2nd matrix
   */

  add(b) {
    const a = this.items
    this.items = [
      a[0] + b[0], a[1] + b[1],
      a[2] + b[2], a[3] + b[3],
    ]
  }


  /**
   * Matrix subtraction
   * @param {Matrix2} b - 2nd matrix
   */

  sub(b) {
    const a = this.items
    this.items = [
      a[0] - b[0], a[1] - b[1],
      a[2] - b[2], a[3] - b[3],
    ]
  }

  
  /**
   * Matrix multiplication
   * @param {Matrix2} b - 2nd matrix 
   */

  mul(b) {
    const a = this.items
    const m_1 = (a[0] * b[0]) + (a[1] * b[2])
    const m_2 = (a[0] * b[1]) + (a[1] * b[3])
    const m_3 = (a[2] * b[0]) + (a[3] * b[2])
    const m_4 = (a[2] * b[1]) + (a[3] * b[3])

    this.items = [
      m_1, m_2,
      m_3, m_4,
    ]
  }


  /**
   * Matrix rotation
   * @param {*} p - Counter clockwise
   */

  rot(p) {
    p *= Math.PI / 180
    const cos = Math.cos(p)
    const sin = Math.sin(p)
    const a = this.items
    const r = [
      cos, -sin,
      sin, cos,
    ]
    this.mul(r)
  }
}


