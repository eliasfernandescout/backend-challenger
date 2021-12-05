import { ICreateJedisDTO } from '../dtos/ICreateJedisDTO';
import { Jedi } from '../entities/Jedi';

interface IJedisRepository {
    // list(): Promise<Contact[]>;
    create(jediData: ICreateJedisDTO): Jedi;
    // sendToEmailPlatform(contactData: ICreateContactDTO): Promise<void>;
}

export { IJedisRepository };
