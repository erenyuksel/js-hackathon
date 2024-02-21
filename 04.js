class Distanciation {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const radius = 5;
const securityCircle = new Distanciation(radius);
console.log("Area of the security circle:", securityCircle.getArea());
console.log("Perimeter of the security circle:", securityCircle.getPerimeter());
