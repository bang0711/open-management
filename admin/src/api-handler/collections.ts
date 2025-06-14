import { collections } from "@/data/collections";

import { Collection } from "@/types";

export class CollectionAPI {
  async list(): Promise<Collection[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return collections;
  }

  async getOne(id: string): Promise<Collection | null> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return collections.find((collection) => collection.id === id) || null;
  }
}
