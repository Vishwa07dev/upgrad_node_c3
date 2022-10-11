const sum =  (a,b)=>{
    return a+b ;
}

const prod = (a,b)=>{
    return a*b ;
}
/**
 * I need to export the content of this file, so 
 * that it can be used by another file
 */
module.exports = {
    sum : sum,
    prod : prod,
    a :5,
    b:6
} 

/**
 * About line, exports sum method to the entire project and it
 * can be re-used now.
 */