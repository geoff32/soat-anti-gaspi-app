import Annonce from "./models/Annonce";
import config from "../config";

interface AnnonceServicesProps {
  getAnnonces: () => Promise<Annonce[]>;
}

const AnnonceServices: AnnonceServicesProps = {
  getAnnonces: async () => {
    var response = await fetch(`${config.API_URL}/annonces`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Erreur lors de la récupération des annonces");
  }
}

export default AnnonceServices;