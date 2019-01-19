var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = new mongoose.Schema({
    name: {type:String,required:true},
    age:{type:Number,default:1}
  });

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'ali',age:3 });
console.log(silence.name); // 'Silence'


// silence.save(function(err,ret){
//     if(err){
//         console.log('error')
//     }else{
//         console.log('success')
//         console.log(ret)
//     }
// })

var col={
    name:'ali',
    age:5,
}

//  全部加个集合 条件查询 
// Kitten.find(col,function(err,ret){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(ret)
//         }
// })

//删除
// Kitten.remove(col,function(err,ret){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(ret)
//     } 
// })

//修改 ID 
// Kitten.findByIdAndUpdate('5c42e5c065960b1cc8307b73',{age:4},function(err,ret){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(ret)
//     }
// })


// Kitten.findOneAndUpdate(col,{age:5},function(err,res){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })

Kitten.updateMany(col,{age:6},function(err,res){
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})
