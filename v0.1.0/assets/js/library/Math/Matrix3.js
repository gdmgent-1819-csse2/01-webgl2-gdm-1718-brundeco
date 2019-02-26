export default class Matrix3 {

  /**
   * 3D matrix
   * @param {Number[]} items - Matrix values
   */

  constructor(items) {
    this.items = items || [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]
  }


  /**
   * Matrix addition
   * @param {Matrix3} b - 2nd matrix
   */

  add(b) {
    const a = this.items
    this.items = [
      (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]),
      (a[3] + b[3]), (a[4] + b[4]), (a[5] + b[5]),
      (a[6] + b[6]), (a[7] + b[7]), (a[8] + b[8]),
    ]
  }


  /**
   * Matrix subtraction
   * @param {Matrix3} b - 2nd matrix
   */

  sub(b) {
    const a = this.items
    this.items = [
      (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]),
      (a[3] - b[3]), (a[4] - b[4]), (a[5] - b[5]),
      (a[6] - b[6]), (a[7] - b[7]), (a[8] - b[8]),
    ]
  }

  /**
   * Matrix multiplication
   * @param {Matrix3} b - 2nd matrix
   */

  mul(b) {
    const a = this.items
    const m_1 = (a[0] * b[0]) + (a[1] * b[3]) + (a[2] * b[6])
    const m_2 = (a[0] * b[1]) + (a[1] * b[4]) + (a[2] * b[7])
    const m_3 = (a[0] * b[2]) + (a[1] * b[5]) + (a[2] * b[8])
    const m_4 = (a[3] * b[0]) + (a[4] * b[3]) + (a[5] * b[6])
    const m_5 = (a[3] * b[1]) + (a[4] * b[4]) + (a[5] * b[7])
    const m_6 = (a[3] * b[2]) + (a[4] * b[5]) + (a[5] * b[8])
    const m_7 = (a[6] * b[0]) + (a[7] * b[3]) + (a[8] * b[6])
    const m_8 = (a[6] * b[1]) + (a[7] * b[4]) + (a[8] * b[7])
    const m_9 = (a[6] * b[2]) + (a[7] * b[5]) + (a[8] * b[8])

    this.items = [
      m_1, m_2, m_3,
      m_4, m_5, m_6,
      m_7, m_8, m_9,
    ]
  }

    /**
   * Matrix rotation
   * @param {Matrix3} p - Counter clockwise
   */

  rot(p) {
    p *= Math.PI / 180
    const cos = Math.cos(p)
    const sin = Math.sin(p)
    const a = this.items
    const r = [
      cos, -sin, 0,
      sin, cos, 0,
      0, 0, 0,
    ]
    this.mul(r)
  }
}