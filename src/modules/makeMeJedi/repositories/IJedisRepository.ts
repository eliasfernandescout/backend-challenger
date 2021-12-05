import { ICreateJedisDTO } from '../dtos/ICreateJedisDTO';
import { Jedi } from '../entities/Jedi';

interface IJedisRepository {
    create(jediData: ICreateJedisDTO): Jedi;
}

export { IJedisRepository };
