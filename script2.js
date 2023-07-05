const playerName = "Per"
let credits = 45

credits -= 10
// playerName = "Richey"
//if possible use const. If not use let.

const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

shippingCost = 15
shippingTime = "7-14 days"

let fullPrice = basePrice - discount + shippingCost
console.log("Total cost: "+ fullPrice + ". It will arrive in " + shippingTime)