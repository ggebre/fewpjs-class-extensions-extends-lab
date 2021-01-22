// Your code here
class Polygon {
    constructor (array){
        this.array = array
    }
    get countSides() {
        return this.array.length
    } 
    get perimeter() {
        return this.array.reduce((memo, e) => memo + e, 0)
    }
}

class Triangle extends Polygon {
    get isValid() { 

        return this.countSides == 3 && !this.array.some(elem => this.perimeter - elem < elem )
    }
} 
class Square extends Polygon {
    get isValid() {
        
        return this.countSides == 4 && !this.array.some(elem => elem != this.array[0])
    } 
    get area(){
        if (this.isValid){
            return this.array[0]**2 
        }
    }
}