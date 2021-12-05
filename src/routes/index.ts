import { Router } from 'express';

import { jedisRoutes } from './jedis.routes';

const router = Router();

router.use('/api/newjedi', jedisRoutes);

export { router };
