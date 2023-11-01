import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } =  request.query as { id: string };
 
        const deleteCustomerService = new DeleteCustomerService();
        return await deleteCustomerService.execute({id});
    }
}

export { DeleteCustomerController }