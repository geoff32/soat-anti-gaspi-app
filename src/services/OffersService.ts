import config from "../config";
import { CreateOfferRequest } from "../services/models";

interface OffersServiceProps {
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
}

const OffersService: OffersServiceProps = {

  createOffer: async (createOfferRequest) => {
    const response = await fetch(`${config.API_URL}/offers`, { 
      method: 'post',
      body: JSON.stringify(createOfferRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const id = await response.json();
    if (response.ok) {
      return id;
    }

    throw new Error("Erreur lors de la création d'annonce");
  },
}

export default OffersService;