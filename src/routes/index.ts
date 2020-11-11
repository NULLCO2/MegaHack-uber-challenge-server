import { Router } from 'express';
import { bikesRouter } from './bike.routes';
import { placesRouter } from './place.routes';

const routes = Router();

routes.use('/bikes', bikesRouter);
routes.use('/places', placesRouter);

export { routes };
