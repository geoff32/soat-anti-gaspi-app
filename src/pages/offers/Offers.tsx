import React, { useEffect, useState } from 'react';
import OffersSearchResult from './OffersSearchResult';
import OffersService from '../../services/OffersService';
import { Offer } from '../../services/models';
import { Container, Error, Loading } from '../../components';

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

  if (offers.length === 0) {
    return <>Aucune annonce</>
  }

  return (
    <Container>
      { offers.map(annonce => (<OffersSearchResult key={annonce.id} {...annonce} />)) }
    </Container>
  )
}

export default Offers;