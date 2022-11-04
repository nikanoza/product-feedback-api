import mongoose from "mongoose";

const { Schema, model } = mongoose;

const replaySchema = new Schema({
  content: {
    type: Schema.Types.String,
    required: true,
  },
  replyingTo: {
    type: Schema.Types.String,
    required: true,
  },
  feedbackId: {
    type: Schema.Types.Number,
    required: true,
  },
  commentId: {
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
  },
});

const Replay = model("Replay", replaySchema);

export default Replay;
