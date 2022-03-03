import mongoose from 'mongoose';

import config from './config.js';

const connection = mongoose.createConnection('mongodb://localhost:27017/test');

import { schema as userSchema, name as userName } from 'common-backend/mongoose/user/schema';
Object.assign(userSchema.statics, { config });

export const user = connection.model(userName, userSchema);
