import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';
import { CreateCustomerController } from '../../src/controllers/customer/CreateCustomerController';
import { ListCustomerController } from '../../src/controllers/customer/ListCustomerController';
import { DeleteCustomerController } from '../../src/controllers/customer/DeleteCustomerController';


export async function customer(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { test: 'Teste API' }
    });

    fastify.post('/create/custumer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    });

    fastify.get('/search/custumer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    });

    fastify.delete('/delete/custumer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });
}