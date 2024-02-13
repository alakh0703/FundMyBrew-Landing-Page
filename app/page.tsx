import Footer from "./_components/Footer";
import InfoCards from "./_components/InfoCards";
import Main from "./_components/Main";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#fdfdfd]">
      <Main />
      <InfoCards />
      <Footer />
    </div>
  );
}
