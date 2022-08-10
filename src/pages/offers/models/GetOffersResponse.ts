import Offer from "./Offer";

export default interface GetOffersResponse {
  items: Offer[];
  total: number;
}
