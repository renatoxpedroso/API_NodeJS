import Fastify, { fastify } from "fastify";
import { customer  } from "../routes/customer/customer";
import cors from "@fastify/cors";
const fastify = require('fastify')({ logger: true })
const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message });
});

const start = async () => {
    await app.register(cors);
    await app.register(customer);

    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        process.exit(1);
    }
}

start();
