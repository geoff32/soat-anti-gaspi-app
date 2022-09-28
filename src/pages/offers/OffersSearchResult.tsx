import React from "react";
import { Button, Card, CardBody, CardHeader } from "../../components";
import { Offer } from "../../services/models";
import { useNavigate } from "react-router-dom";
import "./OffersSearchResult.css";

const OffersSearchResult: React.FC<Offer> = ({
  id,
  companyName,
  title,
  description,
  address
}) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        {companyName} - {title}
      </CardHeader>
      <CardBody>
        <p>{description}</p>
        <p>{address}</p>
        <Button onClick={() => navigate(`/contact/${id}`)}>
          Contacter
        </Button>
      </CardBody>
    </Card>
  );
};

export default OffersSearchResult;
