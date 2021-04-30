const myFunc = function(){

    //this.date = new Date();
return new Promise((resolve,reject)=>{
    setTimeout(()=>{

    // resolve(new Date())
    reject('reason')
    },10000)
})
}

let promise = myFunc();
promise.then(data=>console.log(data));
promise.catch(e=>console.log(e))
console.log('After MyFunc Statement')