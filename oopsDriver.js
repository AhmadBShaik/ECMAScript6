import { Bird, Eagle } from './oops.js'

let parrot = new Bird("Parrot",true);

console.log(parrot.name)
console.log(parrot.fly)
console.log(parrot.canFly())
console.log(parrot.info)
console.log("-------------------")

let penguin = new Bird("Penguin",false)

console.log(penguin.name)
console.log(penguin.fly)
console.log(penguin.canFly())
console.log(penguin.info)
console.log("-------------------")

let harpyEagle = new Eagle("Harpy Eagle",true,"Harpia")

console.log(harpyEagle.name)
console.log(harpyEagle.canFly())
console.log(harpyEagle.genus)
console.log("-------------------")

console.log(Bird.noOfWings())