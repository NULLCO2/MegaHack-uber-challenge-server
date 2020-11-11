import { Router } from 'express';
import { PlacesController } from '../controllers/PlacesController';

const placesRouter = Router();
const placesController = new PlacesController();

placesRouter.get('/', placesController.index);

placesRouter.post('/', placesController.create);

placesRouter.get('/:id', placesController.show);

placesRouter.put('/:id', placesController.edit);

placesRouter.delete('/:id', placesController.delete);

export { placesRouter };
