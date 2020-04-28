import * as mongoose from 'mongoose';

export const MyrlSchema = new mongoose.Schema({
  urlCode: String,
  oldUrl: String,
  newUrl: String,
  date: { type: String, default: Date.now() },
});
