import Navbar from "../components/Shared/Navbar";

export default function Mianlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
      </div>
  )
}
