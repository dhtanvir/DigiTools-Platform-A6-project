import "./App.css";
import Banner from "./component/Banner/Banner";
import BannerCount from "./component/Banner/BannerCount";
import Navbar from "./component/Navbar/Navbar";
import PricingCard from "./component/Pricing/PricingCard";
import StepsCard from "./component/Steps/StepsCard";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <BannerCount />
        {/*  */}
        {/*  */}
        <StepsCard />
        <PricingCard />
      </main>
    </>
  );
}

export default App;
