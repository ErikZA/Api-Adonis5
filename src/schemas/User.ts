import { Schema, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String },
{
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
