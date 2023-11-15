import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomerService } from '../../services/customer/ListCustomerService';

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomerService();
    
    const customers = await listCustomerService.execute();

    return reply.send(customers);
  }
}

export { ListCustomerController }