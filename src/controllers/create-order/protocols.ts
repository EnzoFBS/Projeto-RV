import { Order } from "../../models/order";

export interface CreateOrderParams {
  brothId: string;
  proteinId: string;
}

export interface ICreateOrderRepository {
  createOrder(params: CreateOrderParams): Promise<Order>;
}
