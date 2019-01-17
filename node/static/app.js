var express=require('express')

var app=express()

app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('./node_modules/'))


app.get('/',function(req,res){
    res.send('hello world !!')
})

app.listen(3000,function(){
    console.log('running ..')
})