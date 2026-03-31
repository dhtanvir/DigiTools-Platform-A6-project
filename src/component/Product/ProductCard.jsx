import React, { use } from "react";
import ProductCardDetails from "./ProductCardDetails";

const ProductCard = ({ modelsPromise }) => {
  const getModelsData = use(modelsPromise);

  console.log(getModelsData);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
        {getModelsData.map((model) => (
          <ProductCardDetails key={model.id} model={model} />
        ))}
      </div>
      {/* <ProductCardDetails/> */}
    </div>
  );
};

export default ProductCard;
