import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id} : DeleteCustomerProps){
        if(!id){
            throw new Error("Customer id is required!");
        }
        else{
            const findCustomer = await prismaClient.custumer.findFirst({where: {id: id}});

            if(!findCustomer){
                throw new Error("Customer not found!");
            }
            else{
                await prismaClient.custumer.delete({where: {id: findCustomer.id}});
                return { message: "Customer deleted successfully!" };
            }
        }
    }
}

export { DeleteCustomerService }