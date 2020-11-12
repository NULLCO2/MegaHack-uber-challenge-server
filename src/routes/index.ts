import { Router } from 'express';
import { bikesRouter } from './bike.routes';
import { placesRouter } from './place.routes';
import { usersRouter } from './user.routes';

const routes = Router();

routes.use('/bikes', bikesRouter);
routes.use('/places', placesRouter);
routes.use('/users', usersRouter);

export { routes };
