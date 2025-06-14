import { apiClient } from "@/config/api-client";

import CollectionList from "./collections-list";
import NewCollectionSheet from "./new-collection-sheet";

type Props = {};

async function DatabaseSidebar({}: Props) {
  const collections = await apiClient.collection.list();

  return (
    <aside className="bg-sidebar flex max-h-screen w-60 flex-col border-r shadow-lg">
      <div className="mb-2 flex h-16 items-center border-b border-[#2c313a] px-4">
        <span className="text-lg font-bold tracking-wide">PocketBase</span>
      </div>
      <nav className="flex-1 space-y-2 px-2">
        <h2 className="text-muted-foreground mb-2 px-2 text-xs font-semibold uppercase">
          Collections
        </h2>

        <CollectionList collections={collections} />

        <NewCollectionSheet />
      </nav>
    </aside>
  );
}

export default DatabaseSidebar;
