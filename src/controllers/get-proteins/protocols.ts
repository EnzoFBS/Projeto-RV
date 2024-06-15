import { Protein } from "../../models/protein";
import { HttpResponse } from "../protocols";

export interface IGetProteinsController {
  handle(): Promise<HttpResponse<Protein[]>>;
}

export interface IGetProteinsRepository {
  getProteins(): Promise<Protein[]>;
}
