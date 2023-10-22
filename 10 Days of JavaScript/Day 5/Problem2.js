//Template Literals

function sides(literals, ...expressions) {
    let a= expressions[0];
    let p = expressions[1];
    let array = []
    let s1 = (p + Math.sqrt(Math.pow(p,2) - 16 * a))/4
    let s2 = (p - Math.sqrt(Math.pow(p,2) - 16 * a))/4
    
    array.push(s1, s2)
    
    return array.sort()
    
}