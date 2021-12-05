import { ICreateJedisDTO } from '../dtos/ICreateJedisDTO';
import { Jedi } from '../entities/Jedi';

interface IJedisRepository {
    // list(): Promise<Contact[]>;
    create(contactData: ICreateJedisDTO): Jedi;
    // sendToEmailPlatform(contactData: ICreateContactDTO): Promise<void>;
}
