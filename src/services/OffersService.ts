import config from "../config";
import { GetOffersResponse } from "../pages/offers/models";

interface OffersServiceProps {
  getOffers: () => Promise<GetOffersResponse>;
}

const OffersService: OffersServiceProps = {
  getOffers: async () => {
    var response = await fetch(`${config.API_URL}/offers`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Erreur lors de la récupération des annonces");
  }
}

export default OffersService;