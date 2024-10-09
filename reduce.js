let arr = [1,2,3,7,5,5]
const newArr = arr.reduce( (acc,currval) => {
    return acc + currval
} , 0)
console.log(newArr)

let shoppingCart = [
    {
        item : "fruit",
        itemPrice : 100
    },
    {
        item : "mobile",
        itemPrice : 10000
    },
    {
        item : "laptop",
        itemPrice : 100000
    },
    {
        item : "bike",
        itemPrice : 100000
    },
]
const totalCartPrice = shoppingCart.reduce( (acc,item) => {
    return acc + item.itemPrice
}, 0)
console.log(totalCartPrice)