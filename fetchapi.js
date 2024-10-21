// const url = fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     return response.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error , "Error Occured in Api Call")
// })

async function getData(response) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("Error in Api Call")
    }
}
getData();
