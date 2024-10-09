let arr = [1,2,38,4,8,9,45]
arr.push(56)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)
let index  = arr.indexOf(38)
console.log(index)

console.log(arr.join("-"))
console.log(arr.slice(2,4))
console.log(arr.splice(1,3,23))
console.log(arr)

let newarr = ["Vatsal","Nityaa","Yatharth","Amit Bhai"]
let lang = ["Javascript","Python","Java"]
let ans = newarr.concat(lang)
console.log(ans)
let combine =  [...newarr,...lang]
console.log(combine)

let big = [1,6,[5,9,9,12],[3,[15,78],56]]
let newbig = big.flat(2)
console.log(newbig)
let fr = Array.from(lang)
console.log(lang)

