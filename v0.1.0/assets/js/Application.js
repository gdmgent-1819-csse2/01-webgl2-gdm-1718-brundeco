import Vector2 from './Library/Math/Vector2.js'
import Matrix2 from './Library/Math/Matrix2.js'

export default class Application {
    constructor() {
        console.log('WebGL2 Demo')

        const v1 = new Vector2
        const v2 = new Vector2(1.5, 2.5)
        console.log(v1, v2)

        v1.sub(v2)
        console.log(v1, v2)

        const a = 3
        v1.scalar(a)
        console.log(v1, v2)

        v1.norm()
        console.log(v1)

        const v3 = new Vector2(3,5)
        const v4 = new Vector2(5,3)
        const v5 = new Vector2(-3,-5)
        console.log('v3 . v4', v3.dot(v4))
        console.log('v3 . v4', v3.dot(v5))
    }
}