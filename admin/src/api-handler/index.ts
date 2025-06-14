import { CollectionAPI } from "./collections";

export class APIClient {
  collection: CollectionAPI;

  constructor() {
    this.collection = new CollectionAPI();
  }
}
