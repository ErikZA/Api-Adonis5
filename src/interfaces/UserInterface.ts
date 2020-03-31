export default interface UserInterface {
    id?:number
    firstName: string
    lastName: string
    email?: string
    fullName (): string
}

this.fullName = (): string => { return `${this.firstName} ${this.lastName}` }
