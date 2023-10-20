// singleton
// Object.create


// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Suryansh",
    "full name": "Suryash Raj",
   [ mySym ]: "mykey1",
    age : 23,
    location : "Delhi",
    email : "suryanshraj0@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
    
}

// console.log(JsUser.email);
// console.log((JsUser["email"]));
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "Suryanshraj268@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "suryanshraj@google.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`hello JsUser ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());