import { Jedi } from '../entities/Jedi';

interface ICreateJediDTO {
    _id?: string;
    firstname: string;
    lastname?: string;
    phone?: string;
    tags: string[];
    list: string;
    email: string;
}

interface IContactsRepository {
    list(): Promise<Contact[]>;
    create(contactData: ICreateContactDTO): Contact;
    sendToEmailPlatform(contactData: ICreateContactDTO): Promise<void>;
}
