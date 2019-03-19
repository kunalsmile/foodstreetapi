import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Enter name'
  },
  email: {
    type: String,
    required:'Enter email'
  },
  mobile: {
    type: String,
    required: 'Enter mobile phone.'
  },
  dob: {
    type: Date
  },
  anniversary_date: {
    type: Date
  },
  address: {
    type: String,
    required: 'Enter address for delivery'
  },
  password:{
    type: String,
    required: 'Enter password'
  },
  isAdmin:{
    type: Boolean
  }
});