// array

// let arr = [1,2,3,4,true,]

// console.log(arr);

// let name = ["suryansh","Rashmi","Sumi"]

// const arr2 = new Array()


// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log((arr));
// arr.unshift(5)
// console.log(arr);

// const arr3 = arr.join()
// console.log(arr)
// console.log(arr3)
// console.log(typeof arr3)


// slice and splice in array
 const arr = [1,2,3,4,5]

 console.log(" A" ,arr)
 
 const arrOne = arr.slice(1,3)
 console.log(arrOne)
 
 console.log(" B" ,arr)
 const arrThree = arr.splice(1,3) //main diffrence between slice and slipce in javascript is when we use slice function and give it range than slice function take first range and loose last range but on the other hand splice take first to last range but the maorr
// dfference is slice fucntio does not effect array but splice function give their result by cut the array through the range and show the result.
console.log(arrThree)
console.log(arr)


