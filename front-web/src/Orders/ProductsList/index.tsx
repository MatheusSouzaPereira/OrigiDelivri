import React from "react";

import { ReactComponent as Logo } from "./logo.svg";
import ProductCard from "../Card";
import { ProductsInterface } from "../types";
import { checkIsSelected } from "../../helpers";

type Props = {
  products: ProductsInterface[];
  selectedProducts: ProductsInterface[];
  onSelectProduct: (product: ProductsInterface) => void;
};

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
