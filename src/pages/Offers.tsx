import React, { useEffect, useState } from 'react';
import OffersSearchResult from './offers/OffersSearchResult';
import Offer from './offers/models/Offer';
import Container from '../components/Container';
import Error from '../components/Error';
import Loading from '../components/Loading';
import OffersService from '../services/OffersService';

interface OffersState {
  offers: Offer[];
  isLoaded: boolean;
  hasError: boolean;
}

const defaultState = { offers: [], isLoaded: false, hasError: false };
const Offers: React.FC = () => {
  const [{ offers, isLoaded, hasError }, setState] = useState<OffersState>(defaultState);
  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = async (): Promise<void> => {
    try {
      const offersResponse = await OffersService.getOffers();
      setState({ offers: offersResponse.items, isLoaded: true, hasError: false });
    } catch(e: unknown) {
      setState({ ...defaultState, hasError: true });
    }
  }

  if (hasError) {
    return <Error refresh={() => loadOffers()} />
  }

  if (!isLoaded) {
    return <Loading />
  }

  return (
    <Container>
      { offers.map(annonce => (<OffersSearchResult key={annonce.id} {...annonce} />)) }
    </Container>
  )
}

export default Offers;