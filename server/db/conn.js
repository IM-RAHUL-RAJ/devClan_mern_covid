const mongoose=require('mongoose');

const DB='mongodb+srv://Rahul:rahul123@cluster0.uez4r.mongodb.net/covid?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
    // useFindAndModify:false,
    
   
    // useCreateIndex:true
    // retryWrites: true,
    // w: "majority",
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
   console.log(err);
 })