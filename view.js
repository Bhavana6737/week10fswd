//  const os=require('os')
// console.log(os.type())
// console.log(os.freemem())
// console.log(os.cpus())
//  const path=require('path')
//  console.log(path.dirname(__filename))
//  console.log(path.extname(__filename))
 const fs=require('fs')
 fs.writeFile("example.txt",'utf8',(error)=>{
    if(error){
        console.log(error)

    }
    console.log("hello csd")
 })