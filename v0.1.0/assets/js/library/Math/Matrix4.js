export default class Matrix4 {

  /**
   * 4D matrix
   * @param {Number[]} items - Matrix values
   */

  constructor(items) {
    this.items = items || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
  }


  /**
   * Matrix addition
   * @param {Matrix4} b - 2nd matrix
   */
  add(b) {
    const a = this.items
    this.items = [
      (a[0] + b[0]), (a[1] + b[1]), (a[2] + b[2]), (a[3] + b[3]),
      (a[4] + b[4]), (a[5] + b[5]), (a[6] + b[6]), (a[7] + b[7]),
      (a[8] + b[8]), (a[9] + b[9]), (a[10] + b[10]), (a[11] + b[11]),
      (a[12] + b[12]), (a[13] + b[13]), (a[14] + b[14]), (a[15] + b[15]),
    ]
  }


  /**
   * Matrix subtraction
   * @param {Matrix4} b - 2nd matrix
   */
  sub(b) {
    const a = this.items

    this.items = [
      (a[0] - b[0]), (a[1] - b[1]), (a[2] - b[2]), (a[3] - b[3]),
      (a[4] - b[4]), (a[5] - b[5]), (a[6] - b[6]), (a[7] - b[7]),
      (a[8] - b[8]), (a[9] - b[9]), (a[10] - b[10]), (a[11] - b[11]),
      (a[12] - b[12]), (a[13] - b[13]), (a[14] - b[14]), (a[15] - b[15]),
    ]
  }


  /**
   * Matrix multiplication
   * @param {Matrix4} b - 2nd matrix
   */
  mul(b) {
    const a = this.items

    const m_1 = (a[0] * b[0]) + (a[1] * b[4]) + (a[2] * b[8]) + (a[3] * b[12])
    const m_2 = (a[0] * b[1]) + (a[1] * b[5]) + (a[2] * b[9]) + (a[3] * b[13])
    const m_3 = (a[0] * b[2]) + (a[1] * b[6]) + (a[2] * b[10]) + (a[3] * b[14])
    const m_4 = (a[0] * b[3]) + (a[1] * b[7]) + (a[2] * b[11]) + (a[3] * b[15])

    const m_5 = (a[4] * b[0]) + (a[5] * b[4]) + (a[6] * b[8]) + (a[7] * b[12])
    const m_6 = (a[4] * b[1]) + (a[5] * b[5]) + (a[6] * b[9]) + (a[7] * b[13])
    const m_7 = (a[4] * b[2]) + (a[5] * b[6]) + (a[6] * b[10]) + (a[7] * b[14])
    const m_8 = (a[4] * b[3]) + (a[5] * b[7]) + (a[6] * b[11]) + (a[7] * b[15])

    const m_9 = (a[8] * b[0]) + (a[9] * b[4]) + (a[10] * b[8]) + (a[11] * b[12])
    const m_10 = (a[8] * b[1]) + (a[9] * b[5]) + (a[10] * b[9]) + (a[11] * b[13])
    const m_11 = (a[8] * b[2]) + (a[9] * b[6]) + (a[10] * b[10]) + (a[11] * b[14])
    const m_12 = (a[8] * b[3]) + (a[9] * b[7]) + (a[10] * b[11]) + (a[11] * b[15])
    
    const m_13 = (a[12] * b[0]) + (a[13] * b[4]) + (a[14] * b[8]) + (a[15] * b[12])
    const m_14 = (a[12] * b[1]) + (a[13] * b[5]) + (a[14] * b[9]) + (a[15] * b[13])
    const m_15 = (a[12] * b[2]) + (a[13] * b[6]) + (a[14] * b[10]) + (a[15] * b[14])
    const m_16 = (a[12] * b[3]) + (a[13] * b[7]) + (a[14] * b[11]) + (a[15] * b[15])

    this.items = [
      m_1, m_2, m_3, m_4,
      m_5, m_6, m_7, m_8,
      m_9, m_10, m_11, m_12,
      m_13, m_14, m_15, m_16,
    ]
  }


  /**
   * Matrix rotation
   * @param {Number} a - Counter clockwise
   */

  rot(p) {
    p *= Math.PI / 180
    const cos = Math.cos(p)
    const sin = Math.sin(p)
    const a = this.items
    const r = [
      cos, -sin, 0, 0,
      sin, cos, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
    this.mul(r)
  }
}