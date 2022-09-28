import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Error, Input, Loading } from "../../components";
import { CreateOfferRequest } from "../../services/models";
import OffersService from "../../services/OffersService";
import './CreateOffer.css';

interface CreateOfferState {
  isLoading: boolean;
  hasError: boolean;
}

const defaultCreateOfferRequest: CreateOfferRequest = {
  title: "",
  description: "",
  email: "",
  companyName: "",
  address: "",
  availability: undefined,
  expiration: undefined,
};

const CreateOffer: React.FC = () => {
  const [{ isLoading, hasError }, setState] = useState<CreateOfferState>({
    isLoading: false,
    hasError: false
  });

  const [ offerId, setOfferId ] = useState<string>("");

  const [createOfferRequest, setCreateOfferRequest] =
    useState<CreateOfferRequest>(defaultCreateOfferRequest);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateOfferRequest({
      ...createOfferRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitCreateOffer();
  };

  const submitCreateOffer = async () => {
    setState({ isLoading: true, hasError: false });
    try {
      const id = await OffersService.createOffer(createOfferRequest);
      setOfferId(id);
      setCreateOfferRequest(defaultCreateOfferRequest);
    } catch (e: unknown) {
      setState({ isLoading: false, hasError: true });
    }
    setState({ isLoading: false, hasError: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>Créer une annonce</CardHeader>
        <CardBody>
          <div className="form-content">
            <Input 
              name="title" 
              label="Titre :"
              required
              value={createOfferRequest.title}
              onChange={handleChange} />
            <Input 
              name="description" 
              label="Description :"
              required
              value={createOfferRequest.description}
              onChange={handleChange} />
            <Input 
              name="email"
              type="email"
              label="Email :"
              required
              value={createOfferRequest.email}
              onChange={handleChange} />
            <Input 
              name="companyName"
              label="Entreprise :"
              required
              value={createOfferRequest.companyName}
              onChange={handleChange} />
            <Input 
              name="address"
              label="Adresse :"
              required
              value={createOfferRequest.address}
              onChange={handleChange} />
            <Input 
              name="availability"
              type="date"
              label="Disponibilité :"
              onChange={handleChange} />
            <Input 
              name="expiration"
              type="date"
              label="Expiration :"
              onChange={handleChange} />
          </div>
          {isLoading && <Loading/>}
          {!isLoading && <Button type="submit">Créer</Button>}
          {hasError && <Error refresh={() => submitCreateOffer()}/>}
          {offerId && <p>L'annonce {offerId} a bien été créée !</p>}
        </CardBody>
      </Card>
    </form>
  );
};

export default CreateOffer;
