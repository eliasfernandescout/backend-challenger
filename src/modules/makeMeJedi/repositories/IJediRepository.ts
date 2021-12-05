import {  } from '../entities/Jedi';

interface IJedisRepository {
    // list(): Promise<Contact[]>;
    create(contactData: ICreateContactDTO): Contact;
    // sendToEmailPlatform(contactData: ICreateContactDTO): Promise<void>;
}
