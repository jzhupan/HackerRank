// Arrow Functions


const modifyArray = (nums) => {
    let array = []
      for(let i =0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
          let doubled = nums[i] * 2
          array.push(doubled)
        } else {
          let tripled = nums[i] * 3
          array.push(tripled)
        }
      }
      return array
  }