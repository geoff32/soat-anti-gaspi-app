import config from "../config";
import { CreateOfferRequest, GetOffersResponse } from "../services/models";

interface OffersServiceProps {
  getOffers: () => Promise<GetOffersResponse>;
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
}

const OffersService: OffersServiceProps = {
  
  getOffers: async () => {
    const response = await fetch(`${config.API_URL}/offers`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Erreur lors de la récupération des annonces");
  },

  createOffer: async (createOfferRequest) => {
    const response = await fetch(`${config.API_URL}/offers`, { 
      method: 'post',
      body: JSON.stringify(createOfferRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const {id} = await response.json();
    if (response.ok) {
      return id;
    }

    throw new Error("Erreur lors de la création d'annonce");
  }
}

export default OffersService;