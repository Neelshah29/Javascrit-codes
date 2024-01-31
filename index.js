//ways to print
console.log("Hello  World");
alert("me");

// JS console api
console.log("hello world" ,4+6 ,"Another log");
console.warn("warning")
console.error("error")

// vairables
//containers to data store values
let x ="neel"
var n1=34;
var n2=45;
console.log(n1 + n2);
console.log(n1-n2)  
console.log(x)

//datatypes in  jS
//string
console.log(typeof(x));

//number
console.log(typeof(n1));
var n3=3.44;
console.log(typeof(n3))
 
//object
var marks={
    ravi : 34 ,
    neel :45 ,
    kishan :40
}

var ID={
    Neel : 1 ,
    mahi : 3 ,
    Ravi:9,
}
console.log(typeof(marks))
console.log(ID)

// booleans
var a="True";
var b= "False";
 console.log(a , b)
 
 //undefine and null
 var undefine
 var d = null
 console.log("Undefined variable is "+ typeof(undefine)+"\nNull value is "+typeof(d))

 // primitive datatype string ,object ,number ,und,null boolean
 
 //Refrence Data type Array and Objects
 var arr=[1,2,"Neel" ,3]

 //operator in js
 var e = 35
 var f =100
 console.log("Addition" , e+f)
 console.log("Substraction",e-f);
 console.log("Multiplication",e*f);
 console.log("Division",e/f);
 
 //functions
 function avg(a , b){
    return (a +b)/2;
 }
 c1=avg(4 ,5)
 c2=avg(5,10)
 console.log(c1 ,c2)

 //conditionals statements
 var age =18;
 if (age < 18){
    console.log("under age" ,age)
 }
 else{
    console.log("adult")
 }