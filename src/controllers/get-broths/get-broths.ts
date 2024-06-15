import { IGetBrothsController, IGetBrothsRepository } from "./protocols";
import { Broth } from "../../models/broth";
import { HttpResponse, HttpStatusCode } from "../protocols";

export class GetBrothsController implements IGetBrothsController {
  constructor(private readonly getBrothsRepository: IGetBrothsRepository) {}

  async handle(): Promise<HttpResponse<Broth[]>> {
    try {
      const broths = await this.getBrothsRepository.getBroths();

      return {
        statusCode: HttpStatusCode.OK,
        body: broths,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: [],
      };
    }
  }
}
