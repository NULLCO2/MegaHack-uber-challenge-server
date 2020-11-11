import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import { Place } from '../models/Place';

export class PlacesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const placeRepository = getRepository(Place);

    const places = await placeRepository.find();

    return response.json(places);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      max_bikes,
      number_bikes_available,
      latitude,
      longitude,
    } = request.body;

    const placeRepository = getRepository(Place);

    const data = {
      name,
      max_bikes,
      number_bikes_available,
      latitude,
      longitude,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      max_bikes: Yup.number().required(),
      number_bikes_available: Yup.number().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const place = placeRepository.create(data);

    await placeRepository.save(place);

    return response.status(201).json(place);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const placeRepository = getRepository(Place);

    const place = await placeRepository.findOne(id);

    if (!place) {
      return response.status(400).json({
        message: 'place not found',
      });
    }

    return response.json(place);
  }

  public async edit(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      name,
      max_bikes,
      number_bikes_available,
      latitude,
      longitude,
    } = request.body;

    const placeRepository = getRepository(Place);

    const data = {
      name,
      max_bikes,
      number_bikes_available,
      latitude,
      longitude,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      max_bikes: Yup.number().required(),
      number_bikes_available: Yup.number().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const place = await placeRepository.findOne(id);

    if (!place) {
      return response.status(400).json({
        message: 'place not found',
      });
    }

    Object.assign(place, data);

    await placeRepository.save(place);

    return response.json(place);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const placeRepository = getRepository(Place);
    const place = await placeRepository.findOne(id);

    if (!place) {
      return response.status(400).json({
        message: 'place not found',
      });
    }

    await placeRepository.delete(id);

    return response.json();
  }
}
