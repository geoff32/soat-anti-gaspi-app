import React from 'react';
import Card from '../../components/Card';
import CardBody from '../../components/CardBody';
import CardHeader from '../../components/CardHeader';
import Annonce from './models/Annonce';

const AnnonceSearchResult: React.FC<Annonce> = ({ companyName, title, description, email, address }) => {
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

export default AnnonceSearchResult;