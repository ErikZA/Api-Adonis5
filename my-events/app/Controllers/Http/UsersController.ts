import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {

  public async index() {
    const users = await User.all();
    return users;
  }

  public async store( { request }: HttpContextContract) {
    const data = request.only(['name', 'lastName', 'email', 'password']);
    console.log(data)
    const user = await User.create(data);
    return user;
  }
}
