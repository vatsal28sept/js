let num = [1,2,3,4,5,6,7,8,9,10]
const newNum = num.filter( (num) => {
    return num>4;
} )
console.log(newNum)

num.forEach( (num) => {
    if(num>4){
        console.log(num)
    }
} )