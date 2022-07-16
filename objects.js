/*let student={

    nameOfStudent:"Gaurav",
    age:21,
    gender:"Male",
    college:"ICOER_Wagholi",
    address :["At : Dapegaon","Post:Jawalaga(P.D)","Tq : Ausa","Dist : Latur",413520],
    details:{

        Primary_Education:"Emmanuel Public School , Dapegaon",
        Secondary_Education:"Dayanand Science College , Latur",
        Degree:"Pursuing from-JSPM'S IOCER , Wagholi , Pune",  
    },
    hi:function(){
        
        console.log(`WELCOME!! ${student.name}`);
    },
    
}

console.log(student);

console.log(student.Details);
console.log(student["Address"]);
student.hi();

*/

//------------------------------------------------------------------------------------

/*let state={

    totalStates:28,
    stateName:"Maharashtra",
    population:120000000,
    totalDistricts:36,
    touristPlaces:["Mahabaleshwar","Pachagani","Shivaneri Fort","Lonavala","Shirdi"],
    livingPlace:{

        country:"India",
        district:"Latur",
        tahasil:"Ausa",
        village:"Dapegaon",
        pin:413520
    },
    getdata:function(){

        console.log("Welocome to"+this.livingPlace.district);
    }

}

// console.log(state);
// state.getdata();
// console.log(""+state.getdata);

for(let key in state){

    console.log(key);
}

console.log(`=========================`);

for(let key in state){

    // console.log(key+" : "+state[key]);
    console.log(`${key} : ${state[key]}`);
}

*/

//-------------------------------------------------------------------------------

let arr={

    1:21,
    2:34,
    3:56,
    4:10,
    name:"Gaurav"
}

console.log(arr["1"]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr["name"]);
console.log(arr.name);

