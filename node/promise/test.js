var fs=require('./封装readfile')


fs('./a.txt').then(function(data){
    console.log(data)
    return fs('./b.txt')
}).then(function(data){
    console.log(data)
    return fs('./c.txt')
}).then(function(data){
    console.log(data)
})