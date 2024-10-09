let cars = ["BMW","Audi","Defender","Mustang","Supra"]
for(i = 0;i < cars.length; i++){
    console.log(cars[i]);
}

for(let i = 0; i <= 10; i++){
    console.log(2 + "*" + i + "==" + 2*i )
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}
for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i)
}

const details = {
    name: "Vatsal",
    age: 20,
    gender: "male"
}

for( key in details){
    console.log(key + " : " + details[key])
}