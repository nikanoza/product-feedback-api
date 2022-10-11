import mongoose from "mongoose";

const { Schema } = mongoose;

const statusSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  color: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Status = mongoose.model("Status", statusSchema);

export default Status;
