import { IGetProteinsRepository } from "../../controllers/get-proteins/protocols";
import { Protein } from "../../models/protein";

export class DbMongoGetProteinsRepository implements IGetProteinsRepository{
    async getProteins(): Promise<Protein[]> {
        return [
            {
                "imageInactive": "https://tech.redventures.com.br/icons/pork/inactive.svg",
                "imageActive": "https://tech.redventures.com.br/icons/pork/active.svg",
                "name": "Chasu",
                "description": "A sliced flavourful pork meat with a selection of season vegetables.",
                "price": 10
              }
        ]
    }
}