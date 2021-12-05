// import { ContactRepository } from '../../repositories/implementations/ContactRepository';

import { JedisRepository } from '../../repositories/implementations/JedisRepository';
import { CreateJedisController } from './CreateJedisController';
import { CreateJedisUseCase } from './CreateJedisUseCase';

const jedisRepository = new JedisRepository();

const createJedisUseCase = new CreateJedisUseCase(jedisRepository);

const createJedisController = new CreateJedisController(createJedisUseCase);

export { createJedisController };
