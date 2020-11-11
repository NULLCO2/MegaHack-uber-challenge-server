import { Router } from 'express';
import { BikesController } from '../controllers/BikesController';

const bikesRouter = Router();
const bikesController = new BikesController();

bikesRouter.get('/', bikesController.index);

bikesRouter.post('/', bikesController.create);

bikesRouter.get('/:id', bikesController.show);

bikesRouter.put('/:id', bikesController.edit);

bikesRouter.delete('/:id', bikesController.delete);

export { bikesRouter };
