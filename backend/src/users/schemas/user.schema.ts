import * as mongoose from 'mongoose';
import validator from 'validator';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error('Enter a validate Email');
    },
  },
  password: {
    type: String,
    required: [true],
    trim: true,
  },
  phone: {
    type: Number,
  },
});

UserSchema.set('timestamps', true);
