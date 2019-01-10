import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const WatchListSchema = new Schema({
    movies:[{
        type: Schema.Types.ObjectId,
        ref:"Movie"
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },

});

export default mongoose.model("WatchList", WatchListSchema);
