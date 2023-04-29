// spread operator
// it is used  to split up array element or object properties

// const nums=[1,2,3];
// const newNums=[nums,4];
// console.log(newNums); // [[1,2,3],4]
// const new1Nums=[...nums,4];
// console.log(new1Nums); // [1,2,3,4]


// const oObj={
//     name:"Gaurav",
//     age:22
// }
// const nObj={...oObj,age:20,gender:"Male"};
// console.log(oObj);
// console.log(nObj);



// rest operator
// used to merge list of function arguments into array

function fun(...args){
    console.log(args);
    console.log(typeof args);
    args.forEach(arg => {
        console.log(arg);
    });
}

fun("hello","how",10,true);

