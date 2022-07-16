function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}

var b=10;
outer();
console.log(b);


// lexical environment = local memory + lexical environment of parent

// scope chain = chain of lexical environment and parent refferences