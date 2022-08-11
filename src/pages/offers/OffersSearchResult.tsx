import React from 'react';
import { Card, CardBody, CardHeader } from '../../components';
import { Offer } from '../../services/models';

const OffersSearchResult: React.FC<Offer> = ({ companyName, title, description, email, address }) => {
  return (
    <Card>
      <CardHeader>{companyName} - {title}</CardHeader>
      <CardBody>
        <div>{description}</div>
        <div>{address} - {email}</div>
      </CardBody>
    </Card>
  )
}

export default OffersSearchResult;