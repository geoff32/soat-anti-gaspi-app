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

  const renderBody = () => {
    if (isLoading)
      return <Loading />;

    if (!offerId)
      return <>Page invalide</>;

    if (hasError)
      return <Error refresh={() => deleteOffer(offerId)}/>;

    return <>Félicitations, votre annonce a bien été supprimée !</>
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

export default DeleteOffer;
