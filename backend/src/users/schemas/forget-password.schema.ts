import * as mongoose from 'mongoose';

export const ForgetPasswordShema = new mongoose.Schema({
  userId: String,
  request_status: {
    type: String,
    enum: ['vaild', 'invalid', 'done'],
  },
});

ForgetPasswordShema.set('timestamps', true);
