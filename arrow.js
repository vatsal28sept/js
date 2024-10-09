const user = () => {
    let obj = {
        name : "Vatsal",
        getVal : function (){
            return this.name
        }    
    }
    return obj;

}
console.log(user().getVal())

const add = (n1,n2) => {
    return n1+n2
}
console.log(add(5,6))

const mul = (n1,n2) => (n1*n2)
console.log(mul(5,6))


