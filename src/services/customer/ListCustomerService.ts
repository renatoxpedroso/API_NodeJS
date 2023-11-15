import { exec } from "child_process";
import prismaClient from "../../prisma";
import { executionAsyncId } from "async_hooks";

class ListCustomerService {
  public async execute() {

    const customers = await prismaClient.custumer.findMany();

    return customers;
  }
}

export { ListCustomerService }