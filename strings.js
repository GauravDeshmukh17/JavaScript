let str="Gaurav Deshmukh";

console.log(str);
console.log("Length of String is : "+str.length);

// string slice 

// str.slice(n1,n2)
// --> it takes string from 'n1' index to 'n2-1' index

let str2=str.slice(7,15);
console.log(str2);


// sub string

// str.substr(n1,n2)
// --> it takes string from n1 index and includes n2 elements

console.log(str.substr(2,6));
console.log(str.substr(7,8));
console.log(str.substr(3));


//uppercase and lowercase

let str3=str.toUpperCase();
console.log(str3);

console.log(str);
console.log(str3.toLowerCase());

// trim

// --> it removes spaces from start and end only
// NOTE : It does not removes spaces in between

var str4="  Hello    Every     one     ";
console.log(str4["length"]);
var str4=str4.trim();
console.log(str4.length);

function getdata(){

   let b=100; 
   return b;
}

console.log(""+getdata);
console.log(getdata());

let a=function sum(c,d){

    return c+d;
}

console.log(""+a);
console.log("Sum = "+a(12,45));
