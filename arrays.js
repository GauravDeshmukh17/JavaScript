
/*let cars=["BMW",'Hero',"TATA",'mahindra',1,2,3,'Orchard'];

console.log(cars);
console.log("Element at Index No.2 = "+cars[2]);
console.log("Element at Index No.5 = "+cars[5])

cars[1]="AUDI"
console.log(cars);

console.log(cars.length);

cars[8]="MARUTI SUZUKI"
console.log(cars);

cars[10]="indica"
console.log(cars);

*/

//--------------------------------------------------------------------------

// Methods of Arrays

/*let cars=["BMW",'Hero',"TATA",'mahindra',1,2,3,'Orchard'];

// pop -> it removes element from end 

cars.pop();
console.log(cars);


// push -> it adds element from last

cars.push(8);
console.log(cars);


// unshift -> it adds element from start

cars.unshift("ford")
console.log(cars);


// shift -> it removes element from from start

cars.shift();
console.log(cars);

console.log(cars.length);

*/

//----------------------------------------------------------------------------------

// 2D arrays

let array2d=[

    [1,2,3],
    [4,5,6],
    [7,8,9]

]

console.log(array2d);

console.table(array2d);

console.log(array2d[1][2]);

let len=array2d.length;
console.log("length of array is : "+len);

let arr=array2d.pop();
console.log("Removed array is : "+arr);
console.log("Array after removing last element : "+array2d);

array2d.unshift([7]);
console.log(array2d);
console.table(array2d);



