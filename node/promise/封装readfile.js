var fs= require('fs')

function pReadfile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// pReadfile('./a.txt').then(function(data){
//     console.log(data)
//     return pReadfile('./b.txt')
// }).then(function(data){
//     console.log(data)
//     return pReadfile('./c.txt')
// }).then(function(data){
//     console.log(data)
// })

module.exports=pReadfile