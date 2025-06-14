"use client";

import { Collection } from "@/types";

import { FolderClosed } from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  collections: Collection[];
};

function CollectionList({ collections }: Props) {
  const params = useParams();
  const currentCollectionId = params.collectionId as string;

  return (
    <ul className="space-y-1">
      {collections.map((collection) => (
        <li key={collection.id}>
          <Link
            href={`/management/database/${collection.id}`}
            className={`group hover:bg-sidebar-accent flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-200 ${currentCollectionId === collection.id ? "bg-sidebar-accent" : ""}`}
          >
            <FolderClosed className="size-4" />
            <span className="line-clamp-1">{collection.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CollectionList;
