import { Broth } from "../../models/broth";
import { Order } from "../../models/order";
import { Protein } from "../../models/protein";
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
  findProteinById(id: string): Promise<Protein | null>;
  findBrothById(id: string): Promise<Broth | null>;
}
