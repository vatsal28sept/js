let obj = {
    name : "Vatsal",
    age : 22,
    email : "pvatsal665@gmail.com"
}
console.log(obj)
console.log(obj.name)

let newobj = new Object()
newobj.name = "Nityaa"
newobj.age = "25"
console.log(newobj)

let nestobj = {
    username : {
        fullname : {
            fname : "Vatsal",
            lname : "Patel"
        }
    }
}
console.log(nestobj.username.fullname)

let a = {a:"c",b:"g"}
let b = {e:"c",d:"g"}
let c = Object.assign(a,b)
console.log(c)

const pass = {
    uname : "vatsal",
    frnd  : "Yatharth"
}
const sautan = {
    num1 : "kriti",
    num2  : "nityaa"
}
const finel = {...pass,...sautan}
console.log(finel)