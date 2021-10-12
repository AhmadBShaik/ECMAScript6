
// Template literals
function greet(greeting,uname){
    return `Good ${greeting}, ${uname}!`
} 

console.log(
    greet("evening","Ahmad")
)


// DESTRUCTURING

// object destructuring
const personalInfo = {
    firstName : "Shaik",
    lastName : "Ahmad",
    city : "Nellore"
}


const { firstName,lastName } = personalInfo
console.log(firstName,lastName)

const { firstName:fName,lastName:lName } = personalInfo
console.log(fName,lName)


// array destructuring
const catsArr = ['Lion','Jaguar','Bob Cat','Abyssinian Cat','Siamese Cat','Persian Cat',]

const [ wildCat1,wildCat2,wildCat3,domesticCat1,domesticCat2,domesticCat3 ] = catsArr

console.log(wildCat1,wildCat2,wildCat3,domesticCat1,domesticCat3)


// object literals

function changeAddress (city,state,country) {
    const newAddress = {city,state,country}
    console.log(newAddress)
}

changeAddress('Nellore',"AP","IN")

function addressMaker(address){
    const { city,state } = address

    const newAddress = {
        city,
        state,
        country:"IN"
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city:"Nellore",state:"AP"})

// for of loop


const firstFiveOdds = [1,3,5,7,9]
let sumOfOdds = 0

for(const num of firstFiveOdds){
    sumOfOdds += num
}

console.log(sumOfOdds)

const cats = ['Lion','Jaguar','Bob Cat','Abyssinian Cat','Siamese Cat','Persian Cat',]

for(const cat of cats){
    console.log(cat)
}

const word = "Elephant"

for(const letter of word){
    console.log(letter)
}


// Can't change elements in using for of
// const firstFiveEvens = [2,4,6,8,10]

// for(let num of firstFiveEvens){
//     num += 100
// }

// console.log(firstFiveEvens)


// Spread Operator
const nums1 = [1,2,3,4,5]
const nums2 = [nums1]
const nums3 = [...nums1]
const nums4 = [0,...nums1,6,7,8]

console.log(nums1)  // [1,2,3,4,5]
console.log(nums2)  // [[1,2,3,4,5]]
console.log(nums3)  // [1,2,3,4,5]
console.log(nums4)  // [0,1,2,3,4,5,6,7,8]

const studentInfo = {
    collegeName:"XYZ"
}

const student1 = {
    fullName:"John Doe",
    ...studentInfo,
    address:"Nellore,AP,IN"
}

console.log(studentInfo)
console.log(student1)

// Rest Operator
function add0(...nums){
    console.log(nums)
}

add0(5,2,4)

// arrow functions
function add(...nums){
    const total = nums.reduce( (x,y) => x+y )
    console.log(total)
}

add(2,4,6,8)


const addOdds = (...nums) => console.log(nums.reduce((x,y)=>x+y))
addOdds(1,3,5,7,9)


// default parameters
function makeFullName(firstName,middleName="",lastName=""){
    console.log(`${firstName} ${middleName} ${lastName}`)
}

makeFullName("Shaik","Mudam","Yaseen")
makeFullName("Thiyya","Eswar")
makeFullName("Saif")

const sumOf = (arr=[]) => {
    let total = 0
    arr.forEach(element => {
        total += element
    });
    console.log(total)
}

sumOf([1,2,4])
sumOf()

// padStart
const date = (day,month,year) => {    
    return `${day.padStart(2,"0")}-${month.padStart(2,"0")}-${year.padStart(4,"0")}`
}

console.log(date('9','6','2000'))

// padEnd

const tenDigitPrecision = (num) => {
    
    if(num.includes(".")){
        const indexOfDot = num.indexOf(".") 

        let integerPart = num.slice(0,indexOfDot)
        let decimalPart = num.slice(indexOfDot+1)

        return integerPart +"."+ decimalPart.padEnd(10,"0")

    }else{
        return num+"."+"".padEnd(10,"0")
    }    
    
}

console.log(tenDigitPrecision("12.3"))