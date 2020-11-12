import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/:id', usersController.show);

usersRouter.post('/', usersController.create);

export { usersRouter };
