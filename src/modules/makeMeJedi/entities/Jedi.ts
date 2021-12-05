class Jedi {
    _id?: string;
    firstname: string;
    lastname?: string;

    constructor({ firstname, lastname }: Jedi) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

export { Jedi };
