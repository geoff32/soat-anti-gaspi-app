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

  const renderBody = () => {
    if (isLoading)
      return <Loading />;

    if (!offerId)
      return <>Page invalide</>;

    if (hasError)
      return <Error refresh={() => confirmOffer(offerId)}/>;

    return <>Félicitations, votre annonce a bien été confirmée !</>
  }

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        {renderBody()}
      </CardBody>
    </Card>
  );
};

export default CreateOffer;
