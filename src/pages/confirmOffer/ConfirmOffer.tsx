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

interface ConfirmOfferState {
  isLoading: boolean;
  hasError: boolean;
}

const CreateOffer: React.FC = () => {
  const [{ isLoading, hasError }, setState] = useState<ConfirmOfferState>({
    isLoading: false,
    hasError: false,
  });

  const { offerId } = useParams();

  useEffect(() => {
    confirmOffer(offerId);
  }, [offerId]);

  const confirmOffer = async (offerId: string | undefined): Promise<void> => {
    if (!offerId) return;
    
    try {
      setState({ isLoading: true, hasError: false });
      await OffersService.confirmOffer(offerId);
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
        {!isLoading && <>Félicitations, votre annonce a bien été confirmée !</>}
        {hasError && <Error refresh={() => confirmOffer(offerId)}/>}
      </CardBody>
    </Card>
  );
};

export default CreateOffer;
