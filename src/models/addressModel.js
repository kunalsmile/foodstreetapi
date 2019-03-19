import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AddressSchema = new Schema({
  houseNumber :{
    type: String
  },
  address1 :{
    type: String
  },
  address2 :{
    type: String
  },
  buildingName :{
    type: String
  },
  landmark :{
    type: String
  },
});
