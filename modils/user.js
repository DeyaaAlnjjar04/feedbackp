const mongoos=require('mongoose');
const {Schema}=mongoos

const userSchima=new Schema({
    googleId:String,

});

mongoos.model('users',userSchima);
