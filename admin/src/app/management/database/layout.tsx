import { DatabaseSidebar } from "./_components";

type Props = {
  children: React.ReactNode;
};

function DatabasePageLayout({ children }: Props) {
  return (
    <div className="flex h-full w-full">
      <DatabaseSidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
}

export default DatabasePageLayout;
