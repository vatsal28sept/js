let a = 52
let b = 92

if(a>b){
    console.log("Hu Tara Karta Moto Chu")
}
else{
    console.log("Hu Tara Karta Nano Chu")
}

const time = new Date().getHours();
if (time < 10) {
    console.log("Good Morning");
} else if (time < 20) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if(LoggedInFromEmail && LoggedInFromGoogle){
    console.log("Allow To Watch Porn")
}


if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("Allow To Watch Porn")
}

let x = 10
switch(x){
    case 0:
        console.log("off")
        break;
    case 1:
        console.log("on")
        break;
    default:
        console.log("No Value Found")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object Is Empty")
}

a<b ? console.log("Hu Saccho chu") : console.log("Hu Khotto Chu")

const userEmial = []
if(userEmial){
    console.log("Got User Email")
}
else{
    console.log("Don't Have User Email")
}