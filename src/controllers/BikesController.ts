import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import { Bike } from '../models/Bike';

export class BikesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const bikesRepository = getRepository(Bike);

    const bikes = await bikesRepository.find();

    return response.json(bikes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { model, cost, availability } = request.body;

    const bikesRepository = getRepository(Bike);

    const data = {
      model,
      cost,
      availability,
    };

    const schema = Yup.object().shape({
      model: Yup.string().required(),
      cost: Yup.number().required(),
      availability: Yup.boolean().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const bike = bikesRepository.create(data);

    await bikesRepository.save(bike);

    return response.status(201).json(bike);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bikesRepository = getRepository(Bike);

    const bike = await bikesRepository.findOne(id);

    if (!bike) {
      return response.status(400).json({
        message: 'bike not found',
      });
    }

    return response.json(bike);
  }

  public async edit(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { model, cost, availability } = request.body;

    const bikesRepository = getRepository(Bike);

    const data = {
      model,
      cost,
      availability,
    };

    const schema = Yup.object().shape({
      model: Yup.string().required(),
      cost: Yup.number().required(),
      availability: Yup.boolean().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const bike = await bikesRepository.findOne(id);

    if (!bike) {
      return response.status(400).json({
        message: 'bike not found',
      });
    }

    Object.assign(bike, {
      model,
      cost,
      availability: availability === 'true',
    });

    await bikesRepository.save(bike);

    return response.json(bike);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const bikesRepository = getRepository(Bike);

    const bike = await bikesRepository.findOne(id);

    if (!bike) {
      return response.status(400).json({
        message: 'bike not found',
      });
    }

    await bikesRepository.delete(id);

    return response.json();
  }
}
