import Navbar from "../components/Shared/Navbar";
import Services from "../components/Shared/Services";

export default function MainLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Services />
      {children}
      {/* <AddButton /> */}
      {modal}
    </div>
  );
}
