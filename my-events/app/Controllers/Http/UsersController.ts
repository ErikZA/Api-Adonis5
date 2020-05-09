import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'

export default class UsersController {
  public async index () {
    const users = await User.all()
    return users
  }

  public async store ({ request }: HttpContextContract) {
    const validationSchema = schema.create({
      name: schema.string(),
      lastName: schema.string(),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({ trim: true }),
      rememberMeToken: schema.string(),
    })

    const data = await request.validate({
      schema: validationSchema,
    })

    const user = await User.create(data)
    return user
  }

  public async show ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async update ({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    const validationSchema = schema.create({
      name: schema.string(),
      lastName: schema.string(),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({ trim: true }, [rules.confirmed()]),
      rememberMeToken: schema.string(),
    })

    const data = await request.validate({
      schema: validationSchema,
    })

    user.merge(data)
    await user.save()
    return user
  }

  public async delete ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}
