import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
  name: {
    type: String,
    required: "Enter food item name."
  },
  category: {
    type: String,
    required: "Enter category."
  },
  price: {
    type: Number,
    required: "Enter price."
  },
  description:{
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});
