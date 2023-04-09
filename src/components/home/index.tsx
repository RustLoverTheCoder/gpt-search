import { Header } from "../header";
import { Footer } from "../footer";
import { SearchSection } from "../SearchSection";
import '../global.css'

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
};
