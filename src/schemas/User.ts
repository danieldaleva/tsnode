import { Schema, model, Document } from 'mongoose'

interface UserIterface extends Document{
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserIterface>('User', UserSchema)
