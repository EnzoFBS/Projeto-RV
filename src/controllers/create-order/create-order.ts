import { Order } from "../../models/order";
import { HttpRequest, HttpResponse } from "../protocols";
import { fetchOrderId } from "../../utils/external-api";

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
          body: "Empty Request",
        };
      }

      console.log("protein return ", httpRequest.body.proteinId);
      const protein = await this.createOrderRepository.findProteinById(
        httpRequest.body.proteinId
      );
      console.log("broth return ", httpRequest.body.brothId);
      const broth = await this.createOrderRepository.findBrothById(
        httpRequest.body.brothId
      );

      if (!protein || !broth) {
        return {
          statusCode: 400,
          body: "both brothId and proteinId are required",
        };
      }

      const formatedDescription = `${protein?.name} and ${broth?.name}`;

      const orderIdData = await fetchOrderId();

      return {
        statusCode: 201,
        body: {
          id: orderIdData,
          descripton: formatedDescription,
          image: protein?.imageActive,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "could not place order",
      };
    }
  }
}
