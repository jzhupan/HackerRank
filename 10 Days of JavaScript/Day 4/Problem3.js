//Classes

class Polygon {
    constructor(measurements){
      this.getPerimeters = measurements.reduce((a, b) => a + b, 0);
    }
    
    perimeter(){
      return this.getPerimeters;
    }
  }