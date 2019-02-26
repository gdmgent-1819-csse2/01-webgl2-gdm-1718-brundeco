import TestMatrix2 from './library/Math/TestMatrix2.js'
import TestMatrix3 from './library/Math/TestMatrix3.js'
import TestMatrix4 from './library/Math/TestMatrix4.js'

import TestVector2 from './library/Math/TestVector2.js'
import TestVector3 from './library/Math/TestVector3.js'
import TestVector4 from './library/Math/TestVector4.js'

export default class Tests {
  constructor() {
    console.log("Testing")
    new TestMatrix2()
    new TestMatrix3()
    new TestMatrix4()
    new TestVector2()
    new TestVector3()
    new TestVector4()
  }
}