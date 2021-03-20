import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: String,
  url: String,
  description: String
})

const Charity = mongoose.model('Foundations', charitySchema, 'Foundations');
export default Charity;