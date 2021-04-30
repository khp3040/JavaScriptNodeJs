
let myFunc = function(fn){

    return function(a){

    return function(b){
       return fn(a,b)
    }

}
}


const sum = function(a,b){
    return a+b;
}

const multiply = function(a,b){
    return a*b;
}

let result = myFunc(multiply)(20)(40)
//let result =returnFn(20)

//let result =myFunc(20)(40)


console.log(result)

// JavaScriptEngine Works
// V8, spydermonkey
// EventStack 

// HeapMemory
// EventQueue
// FunctionStack || Call Stack
// EventLoop




