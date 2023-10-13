const mongoose = require("mongoose")

const scheyma = new mongoose.Schema({
title:{
    type:String,
    required:true
},
artist:{
    type:String,
    required:true
},
album:{
    type:String,
    required:true
},
duration:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
song:{
    type:String,
    required:true
}
});


const Song = mongoose.model('songs',scheyma);
module.exports=Song;