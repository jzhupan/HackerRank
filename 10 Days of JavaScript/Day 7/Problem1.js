//Regular Expressions I

function regexVar() {

      let re = /^([aeiou]).*\1$/
      let s = ''
      let lastLetter = s[s.length]

    for(let i = 0; i < s.length; i++){
      if(s[0] === re.test(s) && lastLetter === re.test(s)){
        console.log(true)
      } else {
        console.log(false)
      }
    }
    
    return re;
}