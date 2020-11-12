import { Router } from 'express';
import { bikesRouter } from './bike.routes';
import { placesRouter } from './place.routes';
import { sessionsRouter } from './session.routes';
import { usersRouter } from './user.routes';

const routes = Router();

routes.use('/bikes', bikesRouter);
routes.use('/places', placesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export { routes };
