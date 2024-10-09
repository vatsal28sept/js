var user = {}

function createUser (firstname,lastname,number,email,password){
    user.firstname = firstname;
    user.lastname = lastname;
    user.number = number;
    user.email = email;
    user.password = password;
    return user;
}
createUser("Vatsal","Patel","9316735990","pvatsal665@gmail.com","1234")
console.log(user)
console.log(getFullName())
function getFullName(){
    return user.firstname + " " + user.lastname
}
function userCreds(){
    return {"email" : user.email , "password" : user.password}
}
console.log(userCreds())
function getUserNumber(){
    return user.number
}
console.log(getUserNumber())