import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Error,
  Loading,
} from "../../components";
import { useParams } from "react-router-dom";
import OffersService from "../../services/OffersService";

interface DeleteOfferState {
  isLoading: boolean;
  hasError: boolean;
}

const DeleteOffer: React.FC = () => {
  const [{ isLoading, hasError }, setState] = useState<DeleteOfferState>({
    isLoading: false,
    hasError: false,
  });

  const { offerId } = useParams();

  useEffect(() => {
    deleteOffer(offerId);
  }, [offerId]);

  const deleteOffer = async (offerId: string | undefined): Promise<void> => {
    if (!offerId) return;
    
    try {
      setState({ isLoading: true, hasError: false });
      await OffersService.deleteOffer(offerId);
      setState({ isLoading: false, hasError: false });
    } catch (e: unknown) {
      setState({ isLoading: false, hasError: true });
    }
  };

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        {!offerId && <>Page invalide</>}
        {isLoading && <Loading />}
        {!isLoading && <>Félicitations, votre annonce a bien été supprimée !</>}
        {hasError && <Error refresh={() => deleteOffer(offerId)}/>}
      </CardBody>
    </Card>
  );
};

export default DeleteOffer;
