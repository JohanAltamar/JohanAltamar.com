import mongoose from "mongoose";

const DictionarySchema = new mongoose.Schema({
  language: {
    enum: ["en", "es"],
  },
  content: {
    type: Object,
  },
});

export default mongoose.models.Dictionary ||
  mongoose.model("Dictionary", DictionarySchema);
