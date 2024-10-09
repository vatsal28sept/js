const arr = ["car","bike","truck","cycle"]
for(const i of arr){
    console.log(i)
}

const str = "Vatsal"
for(const j of str){
    console.log(j)
} 

const map = new Map()
map.set("name","Vatsal")
map.set("age","22")
map.set("gender","male")


// console.log(map)

for(const [key,value] of map){
    console.log(key,value)
}

let myObj = {
    name : "Yatharth",
    age : 22,
    gender : "male"
}
for (const key in myObj) {
   console.log(key + " => " + myObj[key])
}

let Language = ["Js","Py","C++","Css"]
for (const key in Language) {
    console.log(Language[key])
}

let lang = ["JavaScript","Python","Java","C++","Dart"]
lang.forEach( (item,index,lang) => {
    console.log(item,index,lang)
} )

let myCoding = [
    {
        languageName : "JavaScript",
        languageFile : "Js"
    },
    {
        languageName : "Python",
        languageFile : "Py"
    },
    {
        languageName : "Java",
        languageFile : "Java"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName + " And Its Extantion Is " + item.languageFile)
} )