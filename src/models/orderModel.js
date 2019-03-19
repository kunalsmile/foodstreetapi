import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
  customerId: {
    type: String,
    required: 'Order should be with a customer'
  },
  items: {
    type: String // Will contain Id of items in comma separated format.
  },
  total: {
    type: Number
  },
  isOrdered: {
    type: Boolean,
    default: false
  }
});