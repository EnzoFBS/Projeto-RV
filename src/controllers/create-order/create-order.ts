import { Order } from "../../models/order";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateOrderParams,
  ICreateOrderController,
  ICreateOrderRepository,
} from "./protocols";

export class CreateOrderController implements ICreateOrderController {
  constructor(private readonly createOrderRepository: ICreateOrderRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateOrderParams>
  ): Promise<HttpResponse<Order>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      const order = await this.createOrderRepository.createOrder(
        httpRequest.body
      );

      return {
        statusCode: 201,
        body: order,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Somtthing went wrong",
      };
    }
  }
}
