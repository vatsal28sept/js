const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Tasak Completed")
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2 Completed");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async TAsk 2 Consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Vatsal Patel" , email : "pvatsal665@gmail.com"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Patel Vatsal", email : "vatsal665@gmail.com"})
        }
        else{
            reject("Error Occured");
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The Promise Is Either Resolved Or Rejected")
})



// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username : "JavaScript" , password : "123"})
//         } 
//         else{
//             reject("Error Occured")
//         }
//     }, 1000);
// })

// async function counsumePromiseFive() {
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }
//     catch{
//         console.log("Error Occured In Promise 5")
//     }
// }
// counsumePromiseFive()

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username : "JAvaScript" , password : 123});
        }
        else{
            reject("Error Occured");
        }
    }, 1000);
}) 
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch{
        console.log("Error Occured In Promise 5 ")
    }
}
consumePromiseFive()