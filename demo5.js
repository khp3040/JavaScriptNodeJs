const myFunc = function(){

    this.date = new Date();

    setTimeout(()=>{

        console.log('Hello '+this.date)
    },0)
}

myFunc();
console.log('After MyFunc Statement')