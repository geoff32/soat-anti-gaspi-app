import React, { useEffect, useState } from 'react';
import AnnonceSearchResult from './annonces/AnnonceSearchResult';
import Annonce from './annonces/models/Annonce';
import Container from '../components/Container';
import Error from '../components/Error';
import Loading from '../components/Loading';
import AnnonceServices from '../services/AnnonceServices';

interface AnnoncesState {
  annonces: Annonce[];
  isLoaded: boolean;
  hasError: boolean;
}

const defaultState = { annonces: [], isLoaded: false, hasError: false };
const Annonces: React.FC = () => {
  const [{ annonces, isLoaded, hasError }, setState] = useState<AnnoncesState>(defaultState);
  useEffect(() => {
    loadAnnonces();
  }, []);

  const loadAnnonces: () => Promise<void> = () => {
    return AnnonceServices.getAnnonces()
      .then(annonces => setState({ annonces, isLoaded: true, hasError: false }))
      .catch(() => setState({ ...defaultState, hasError: true }));
  }

  if (hasError) {
    return <Error />
  }

  if (!isLoaded) {
    return <Loading />
  }

  return (
    <Container>
      {annonces.map(annonce => (<AnnonceSearchResult key={annonce.id} {...annonce} />))}
    </Container>
  )
}

export default Annonces;