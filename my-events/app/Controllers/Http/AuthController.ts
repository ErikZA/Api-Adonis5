import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login ({ request, auth }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    try {
      const token = await auth.attempt(data.email, data.password)
      console.log(token)
      return token
    } catch (error) {
      console.log(error)
    }
  }

  public async logout ({ auth }: HttpContextContract) {
    const tokenOff = await auth.logout()
    return tokenOff
  }
}
