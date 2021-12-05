import { Response, Request } from 'express';

import { CreateJedisUseCase } from './CreateJedisUseCase';

class CreateJedisController {
    constructor(private createJedisUseCase: CreateJedisUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const jediData = request.body;

        const contact = await this.createJedisUseCase.execute(jediData);

        return response.status(201).json(contact).send();
    }
}

export { CreateJedisController };
