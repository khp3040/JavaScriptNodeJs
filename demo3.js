
let myFunc = function(a){
    return function(b){
        return a+b;
    }
}

let returnFn = myFunc(10)
//let result =returnFn(20)

let result =myFunc(20)(40)


console.log(result)

// JavaScriptEngine Works
// V8, spydermonkey
// EventStack 

// HeapMemory
// EventQueue
// FunctionStack || Call Stack
// EventLoop




