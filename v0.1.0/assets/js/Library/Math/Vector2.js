export default class Vector2 {

    constructor(x, y) {
        this.x = Number(x) || 0
        this.x = Number(y) || 0
    }

    norm() {
        return Math.sqrt(this.x**2 + this.y**2)
    }

    /**
     * Addition
     * 
     * @param {Vector2} v 
     */
    add(v) {
        this.x += v.x
        this.x += v.x
    }

    /**
     * Subtraction
     * 
     * @param {Vector2} v 
     */
    sub(v) {
        this.x -= v.x
        this.x -= v.x
    }

    /**
     * Scalar
     * 
     * @param {Number} v 
     */
    scalar(a) {
        this.x *= a
        this.x *= a
    }
    
    /**
     * Dot Product
     * 
     * @param {Number} v 
     */
    dot(v) {
        return this.x * v.x + this.y * v.y
    }
}