
//读文件
var fs =require('fs')

fs.readFile('./data.json','utf8',function(err,data){
        console.log(data)
})


//写文件

fs.writeFile('./data.text','hello node !',function(err){
        if(err){
            console.log('error')
        }else{
            console.log('success')
        }
    
})