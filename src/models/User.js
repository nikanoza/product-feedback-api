import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  avatar: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
