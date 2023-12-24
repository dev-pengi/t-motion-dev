import { Hero, About, Info, FAQs, NavBar, Footer } from "@/components";
import MeshBg from "@/components/general/MeshBg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <MeshBg />
        <NavBar />
        <Hero />
      </div>
      <About />
      <Info />
      <FAQs />
      <Footer />
    </>
  );
}
