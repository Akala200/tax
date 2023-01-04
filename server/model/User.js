/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';


const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    amount: {
      type: Number,
    }
  },
  { timestamps: true }
);


const User = mongoose.model('User', UserSchema);

export default User;
