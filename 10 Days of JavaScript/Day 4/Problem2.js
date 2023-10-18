// Count Objects

function getCount(objects) {
    let totalPairs = 0;
    let n = objects.length
    for(let i = 0; i < objects.length; i++){
      //console.log(i, objects[i].x, objects[i].y)
      if(objects[i].x === objects[i].y){
        totalPairs += 1;
      }
    }
        return totalPairs
    
}