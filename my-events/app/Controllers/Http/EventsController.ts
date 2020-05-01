import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Event from 'App/Models/Event'

export default class EventsController {
  public async index () {
    const events = await Event.all()
    return events
  }

  public async store ({ request }: HttpContextContract) {
    const data = request.only(['title', 'description', 'imageUrl', 'price'])
    const event = await Event.create(data)
    return event
  }

  public async show ({ params }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    return event
  }

  public async update ({ params, request }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    const data = request.only(['title', 'description', 'imageUrl', 'price'])
    event.merge(data)
    await event.save()
    return event
  }

  public async delete ({ params }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    await event.delete()
  }
}
