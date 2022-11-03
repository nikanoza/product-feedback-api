import mongoose, { Mongoose } from "mongoose";

const { Schema, model } = mongoose;

const commentSchema = new Schema({
    content: {
        type: Schema.Types.String,
        required: true,
    },
    feedbackId: {
        type: Schema.Types.Number,
        required: true,
    },
    userId: {
        type: Schema.Types.Number,
        required: true,
    },
    id: {
        type: Schema.Types.Number,
        required: true,
    }
})

const Comment = model('Comment', commentSchema);

export default Comment;