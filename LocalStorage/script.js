const nameInput = document.querySelector("#name");
const gender = document.querySelector("#gender")
const age = document.querySelector("#age")
const ans = document.querySelector("#ans")



function saveData(){
    localStorage.setItem("name",nameInput.value)
    localStorage.setItem("gender",gender.value)
    localStorage.setItem("age",age.value)
    console.log("Data Saved")
}
function getData(){
    let a = localStorage.getItem("name") || "Unknown";
    let b = localStorage.getItem("gender") || "Unknown";
    let c = localStorage.getItem("age") || "Unknown";
    ans.innerHTML = `My Name is ${a}, my Gender is ${b}, and my Age is ${c}`;
}

function removeData(){
    // localStorage.removeItem(nameInput)
    // localStorage.removeItem(gender)
    // localStorage.removeItem(age)
    localStorage.clear()
    ans.innerHTML = "";
}