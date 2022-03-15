import mongoose from "mongoose";

const tiktokschema=new mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:{
        type:String
    },
    messages:String,
    description:String,
    share:String

});
export default mongoose.model('tiktokVideo', tiktokschema);