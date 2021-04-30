const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)

// const readFile = (fileName,encoding)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(fileName,encoding,(err,data)=>{
//             if(err){
//                 return reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

readFile('./shape.js','utf-8').then(data=>console.log(data))