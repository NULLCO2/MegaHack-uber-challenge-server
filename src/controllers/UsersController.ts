import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcrypt';
import { User } from '../models/User';
import users_view from '../views/users_view';

export class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = getRepository(User);

    const findUserByEmail = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (findUserByEmail) {
      return response.status(400).json({
        message: 'Email address already used',
      });
    }

    const hasedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hasedPassword,
    });

    await usersRepository.save(user);

    return response.status(201).json(users_view.render(user));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      return response.status(400).json({
        message: 'User not found',
      });
    }

    return response.json(users_view.render(user));
  }
}
