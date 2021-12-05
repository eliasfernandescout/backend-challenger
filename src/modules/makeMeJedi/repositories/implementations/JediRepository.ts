import axios from 'axios';
import mongoose from 'mongoose';

import { Contact } from '../../entities/Jedi';
import { IContactsRepository, ICreateContactDTO } from '../IContactsRepository';

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
});

const ContactDoc = mongoose.model<Contact>('Contact', contactSchema);

class ContactRepository implements IContactsRepository {
    create(contactData: ICreateContactDTO): Contact {
        const contactInstance = new Contact(contactData);

        const contact = new ContactDoc(contactInstance);
        contact.save();
        return contact;
    }

    async list() {
        const contact = await ContactDoc.find();
        return contact;
    }

    async sendToEmailPlatform(contact: ICreateContactDTO): Promise<void> {
        // const data = await axios.post('/', contact);
        // return data;
    }
}

export { ContactRepository };
