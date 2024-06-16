import { Order } from "../../models/order";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateOrderController {
  handle(
    httpRequest: HttpRequest<CreateOrderParams>
  ): Promise<HttpResponse<Order>>;
}

export interface CreateOrderParams {
  brothId: string;
  proteinId: string;
}

export interface ICreateOrderRepository {
  createOrder(params: CreateOrderParams): Promise<Order>;
}
