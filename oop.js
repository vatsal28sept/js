function car(company,model,year){
    this.company = company,
    this.model = model,
    this.year = year
}

const car1 = new car("toyota","supra",1999)
console.log(car1.company)

class Person{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    method2(){
        console.log("My Name Is : " + this.name + "And My Age Is : " + this.age + "And My Email Is :" + this.email)
    }
}
let person1 = new Person("Vatsal",22,"pvatsal665@gmail.com")
let person2 = new Person("Yatharth",23,"yatharth@gmail.com")
console.log(person1)
console.log(person2)
person1.method2()
person2.method2()



class Bike{
    constructor(company){
        this.company = company;
    }
}
class Automobile extends Bike{
    constructor(company,name,cc){
        super(company);
        this.name = name;
        this.cc = cc;
    }
}
let comp = new Bike("Yamaha");
let auto = new Automobile("Yamaha","Ninja","1500")
console.log(comp)
console.log(auto)
