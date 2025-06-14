type Props = {
  params: Promise<{
    collectionId: string;
  }>;
};

async function CollectionDetailPage({ params }: Props) {
  const { collectionId } = await params;
  return <div>CollectionDetailPage: {collectionId}</div>;
}

export default CollectionDetailPage;
