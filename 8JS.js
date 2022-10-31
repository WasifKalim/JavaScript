 
console.log("This is tutorial");
console.log("\t");

// name1,2,.. is passing as a parameter
// if the greetText is not sent as parameter then it take the default(given) value
function greet(name  , greetText="Greetings from Javascript"){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
    console.log("\t");
}
// revision of function
function sum(a,b,c){
    d = a + b + c;
    return d;
    // this line will never run(execute) because of return statement
    console.log("Function is returned");
}
let name = "Harry";
let name2 = "Shubham";
let name3 = "Druv";
let name4 = "Faizal";
let greetText = "GoodMorning";
greet(name, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);// in this case greetText text will print given value in value
let returnValue = sum(1, 2, 4);
console.log(returnValue);

// console.log(name + " is a good");
// console.log(name2 + " is a good");
// console.log(name3 + " is a good");
// console.log(name4 + " is a good");