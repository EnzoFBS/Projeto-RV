import { Broth } from "../../models/broth";
import { HttpResponse } from "../protocols";

export interface IGetBrothsController {
  handle(): Promise<HttpResponse<Broth[]>>;
}

export interface IGetBrothsRepository {
  getBroths(): Promise<Broth[]>;
}
