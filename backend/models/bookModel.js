import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String, 
      required: true,
    },
    author: {
      type: String, 
      required: true,
    },
    publishYear: {
      type: Number, 
      reuqired: true,
    },
  },
  {
    timeStamp: true,
  }
);

export const Book = mongoose.model('Cat', bookSchema);