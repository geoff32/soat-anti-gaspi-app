import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Error, Input, Loading } from "../../components";
import { CreateOfferRequest } from "../../services/models";
import ContactRequest from "../../services/models/ContactRequest";
import OffersService from "../../services/OffersService";
import './Contact.css';

interface ContactState {
  isLoading: boolean;
  hasError: boolean;
}

const defaultContactRequest: ContactRequest = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
};

const Contact: React.FC = () => {
  const [{ isLoading, hasError }, setState] = useState<ContactState>({
    isLoading: false,
    hasError: false
  });

  const { offerId } = useParams();

  const [contactRequest, setContactRequest] =
    useState<ContactRequest>(defaultContactRequest);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactRequest({
      ...contactRequest,
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
      const id = await OffersService.contact(offerId ?? "", contactRequest);
      setContactRequest(defaultContactRequest);
    } catch (e: unknown) {
      setState({ isLoading: false, hasError: true });
    }
    setState({ isLoading: false, hasError: false });
  };

  const renderBody = () => {
    if (isLoading)
        return <Loading/>;

    if (hasError)
        return <Error refresh={() => submitCreateOffer()}/>;

    if (offerId)
        <p>L'annonce {offerId} a bien été créée !</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>Créer une annonce</CardHeader>
        <CardBody>
          <div className="form-content">
            <Input 
              name="firstName" 
              label="Prénom :"
              required
              value={contactRequest.firstName}
              onChange={handleChange} />
            <Input 
              name="lastName" 
              label="Nom :"
              required
              value={contactRequest.lastName}
              onChange={handleChange} />
            <Input 
              name="email"
              type="email"
              label="Email :"
              required
              value={contactRequest.email}
              onChange={handleChange} />
            <Input 
              name="phone"
              label="Téléphone :"
              type="tel"
              required
              value={contactRequest.phone}
              onChange={handleChange} />
            <Input 
              name="message"
              label="Message :"
              required
              value={contactRequest.message}
              onChange={handleChange} />
          </div>
          
          {!isLoading && <Button type="submit">Créer</Button>}
          {renderBody()}

        </CardBody>
      </Card>
    </form>
  );
};

export default Contact;
