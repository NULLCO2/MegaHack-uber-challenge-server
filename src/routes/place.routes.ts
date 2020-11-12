import { Router } from 'express';
import { PlacesController } from '../controllers/PlacesController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const placesRouter = Router();
const placesController = new PlacesController();

placesRouter.get('/', placesController.index);

placesRouter.post('/', ensureAuthenticated, placesController.create);

placesRouter.get('/:id', placesController.show);

placesRouter.use(ensureAuthenticated);

placesRouter.put('/:id', placesController.edit);

placesRouter.delete('/:id', placesController.delete);

export { placesRouter };
