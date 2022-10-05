import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

export default Category