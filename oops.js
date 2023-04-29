class Penguin{
    constructor(){
        this.habitat="Antartica"
    }

    printPlaceOfOrigin(){
        console.log(this.habitat);
    }
}

const myPenguin=new Penguin();

console.log(myPenguin);
myPenguin.printPlaceOfOrigin();