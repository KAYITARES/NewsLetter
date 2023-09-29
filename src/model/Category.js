import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
});
const Category = mongoose.model("Category", categorySchema);
export default Category;
