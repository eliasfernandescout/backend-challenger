import { Router } from 'express';

import { createJedisController } from '../modules/makeMeJedi/usecases/createJedi';

const jedisRoutes = Router();

jedisRoutes.post('/', (request, response) => {
    return createJedisController.handle(request, response);
});

export { jedisRoutes };
