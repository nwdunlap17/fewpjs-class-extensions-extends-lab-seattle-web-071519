// Your code here
class Polygon{
    constructor( array){
        this.edges = array
    }
    get countSides(){
        return this.edges.length
    }

    get perimeter(){
        return this.edges.reduce((a,b) => a + b, 0)
    }
}


class Triangle extends Polygon {
    get isValid(){
        if (this.countSides != 3) {return false}
        let arr = this.edges.sort(function(a,b){ return b - a})
        
        return arr[0] < (arr[1] + arr[2])
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides != 4){ return false}
        let size = this.edges[0]
        for(let i = 1; i < this.countSides; i++){
            if (this.edges[i] != size){return false}
        }
        return true
    }

    get area(){

        let size = this.edges[0]
        return size*size
    }
}