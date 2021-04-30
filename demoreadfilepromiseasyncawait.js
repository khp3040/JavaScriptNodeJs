const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)

// (async () => {
//     try{
// const data = await readFile('./shape.js','utf-8');
// console.log(data)
//     }catch(err){
//         console.log(err);
//     }

// })();

async function myFunc() {
    try{
const data = await readFile('./shape.js','utf-8');
console.log(data)
    }catch(err){
        console.log(err);
    }

}
myFunc();