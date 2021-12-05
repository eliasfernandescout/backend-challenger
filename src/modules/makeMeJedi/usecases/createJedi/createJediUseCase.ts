import { ICreateJedisDTO } from '../../dtos/ICreateJedisDTO';
import { Jedi } from '../../entities/Jedi';
import { IJedisRepository } from '../../repositories/IJedisRepository';

class CreateJediUseCase {
    constructor(private jedisRepository: IJedisRepository) {}

    execute(jediData: ICreateJedisDTO): Jedi {
        try {
            const jedi = this.jedisRepository.create(jediData);

            return jedi;
        } catch (err) {
            console.log(err);
            throw new Error("Couldn't make you a new Jedi");
        }
        // mautic request
    }
}

export { CreateJediUseCase };
