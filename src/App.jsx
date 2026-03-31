import { Suspense } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import BannerCount from "./component/Banner/BannerCount";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import PricingCard from "./component/Pricing/PricingCard";
import Product from "./component/Product/Product";
import ProductCard from "./component/Product/ProductCard";
import StepsCard from "./component/Steps/StepsCard";
import Transform from "./component/Transform/Transform";

const getModelsData = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

function App() {
  const modelsPromise = getModelsData();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <BannerCount />
        {/*  */}
        <Product />

        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          <ProductCard modelsPromise={modelsPromise}  />
        </Suspense>

        {/*  */}
        <StepsCard />
        <PricingCard />
        <Transform />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
