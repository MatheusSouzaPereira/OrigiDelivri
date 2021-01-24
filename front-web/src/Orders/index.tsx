import React, { useState, useEffect } from "react";
import "./styles.css";

import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";

import { fetchProducts, saveOrder } from "../services/api";
import OrderLocation from "./OrderLocation";
import { OrderLocationData, ProductsInterface } from "./types";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "../helpers";
import { toast } from "react-toastify";

function Orders() {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ProductsInterface[]>(
    []
  );

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => toast.warning("Erro ao listar produto"));
  }, []);
  const handleSelectProduct = (product: ProductsInterface) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}

export default Orders;
