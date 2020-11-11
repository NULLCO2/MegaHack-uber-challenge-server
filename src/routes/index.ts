import { Router } from 'express';
import { bikesRouter } from './bike.routes';

const routes = Router();

routes.use('/bikes', bikesRouter);

export { routes };
