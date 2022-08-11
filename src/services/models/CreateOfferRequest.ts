export default interface CreateOfferRequest {
  title: string;
  description: string;
  email: string;
  companyName: string;
  address: string;
  availability?: Date;
  expiration?: Date;
}
