import { Schema, Document } from 'mongoose'

export default interface UserInterface extends Document {
    firstName: string
    lastName: string
    email?: string
    fullName(): string
}

new Schema().methods.fullName = (): string => { return this.firstName + ' ' + this.lastName }
