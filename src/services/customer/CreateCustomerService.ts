import prismaClient from "../../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
}

class CreateCustomerService{
    async execute({name, email}: CreateCustomerProps){
        
        if(!name || !email){
            throw new Error('Name and email are required');
        }

        const customer = await prismaClient.custumer.create({
            data:{
                name,
                email,
                status: true,
            }
        });

        return customer;
    }
}

export { CreateCustomerService }