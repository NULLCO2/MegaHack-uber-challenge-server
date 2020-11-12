import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { User } from '../models/User';
import users_view from '../views/users_view';
import authConfig from '../config/auth';

export class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        message: 'Incorrect email/password combination.',
      });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return response.status(401).json({
        message: 'Incorrect email/password combination.',
      });
    }

    const { expiresIn, secret } = authConfig.JWT;

    // eslint-disable-next-line
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return response.json({
      token,
      user: users_view.render(user),
    });
  }
}
