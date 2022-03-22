import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  demo_url: {
    type: String,
    required: false,
    trim: true,
  },
  repo_url: {
    type: String,
    required: false,
    trim: true,
  },
  language: {
    enum: ["en", "es"],
  },
  type: {
    enum: ["frontend", "backend", "fullstack"],
  },
  technologies: {
    type: Array,
    of: {
      type: String,
    },
  },
  features: {
    type: Array,
    of: {
      type: String,
    },
  },
  translations: {
    type: Array,
    of: {
      language: { enum: ["en", "es"] },
      link: { type: String, trim: true, required: true },
    },
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
