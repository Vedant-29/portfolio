import mongoose, { Schema, Document, Model } from "mongoose";

// Define the TypeScript interface for the Topic document
interface ITopic extends Document {
  title: string;
  description: string;
}

// Define the schema using the interface
const topicSchema: Schema<ITopic> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Use the `mongoose.models.Topic` to check if the model already exists
const Topic: Model<ITopic> = mongoose.models.Topic || mongoose.model<ITopic>("Topic", topicSchema);

export default Topic;
