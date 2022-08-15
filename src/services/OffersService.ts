import config from "../config";
import { CreateOfferRequest, GetOffersResponse } from "../services/models";

interface OffersServiceProps {
  getOffers: () => Promise<GetOffersResponse>;
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
  confirmOffer: (offerId: string) => Promise<void>;
  deleteOffer: (offerId: string) => Promise<void>;
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

    const id = await response.json();
    if (response.ok) {
      return id;
    }

    throw new Error("Erreur lors de la création d'annonce");
  },

  confirmOffer: async (offerId) => {
    const response = await fetch(`${config.API_URL}/offers/${offerId}/confirm`, { 
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return;
    }

    throw new Error("Erreur lors de la confirmation d'annonce");
  },

  deleteOffer: async (offerId) => {
    const response = await fetch(`${config.API_URL}/offers/${offerId}/delete`, { 
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return;
    }

    throw new Error("Erreur lors de la suppression d'annonce");
  }
}

export default OffersService;