// there are two typws of datatypes primitive and non-primitive...

// primitive.....

// 7 types of primitve datatypes :- string,number,boolean,null,undefined,Bigint,Symbol
console.log("suryansh") //string data types value
console.log(6664640) //number data typed value

const score = 1146464 //type number
const scoreValue= 855854 //type number

let email; // type undefined

const id = Symbol(123) // type symbol
const anotherid = Symbol(123)//type symbol
console.log (id==anotherid)

const bigNumber = 646449459449456n
console.log(bigNumber)

// non-primitive(refrence type)...
// there are three types of non-primitive datatypes:-array,function,object

// arrays
const arr = ["Rashmi", "Suryansh","Sumi"]

// objects
let myobj ={
    name:"suryansh",
    age:22
}

// functions
const myFunction = function(){
    console.log("hello world")
}

// how to allocate memory in javascript

// there are two types of memory allocated in javascript 
// 01.)Stack memory(it's store only primitve data types value)
// 02.)Heap memory(it's store only non-primitive data types value)

// stack memory