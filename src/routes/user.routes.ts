import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', ensureAuthenticated, usersController.show);

usersRouter.post('/', usersController.create);

export { usersRouter };
