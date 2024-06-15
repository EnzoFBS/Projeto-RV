import { IGetProteinsController, IGetProteinsRepository } from "./protocols";
import { Protein } from "../../models/protein";
import { HttpResponse, HttpStatusCode } from "../protocols";

export class GetProteinsController implements IGetProteinsController {
  constructor(private readonly getProteinsRepository: IGetProteinsRepository) {}

  async handle(): Promise<HttpResponse<Protein[]>> {
    try {
      const proteins = await this.getProteinsRepository.getProteins();

      return {
        statusCode: HttpStatusCode.OK,
        body: proteins,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: [],
      };
    }
  }
}
