import * as mongoose from 'mongoose';
export interface MyrlInterface extends mongoose.Document {
  _id: string;
  urlCode: string;
  oldUrl: string;
  newUrl: string;
  date: string;
}
