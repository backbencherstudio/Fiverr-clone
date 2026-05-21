import AddButton from "../components/Shared/AddButton";
import Navbar from "../components/Shared/Navbar";
import Services from "../components/Shared/Services";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      <Services/>
      {children}
      <AddButton/>
      </div>
  )
}
