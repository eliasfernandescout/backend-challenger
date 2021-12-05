// interface IContactParams {
//     firstname: string;
//     lastname?: string;
//     phone?: string;
//     tags: string[];
//     list: string;
//     email: string;
// }

class Contact {
    _id?: string;
    firstname: string;
    lastname?: string;
    phone?: string;
    tags: string[];
    list: string;
    email: string;

    constructor({ firstname, lastname, phone, tags, list, email }: Contact) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.tags = tags;
        this.list = list;
        this.email = email;
    }

    // sendToEmailPlatform(api) {
    //     if (api.type === 'mautic') {
    //         // mautic req
    //     }
    //     if (api.type === 'atice-campaign') {
    //         // active request
    //     }
    // }
}

export { Contact };
