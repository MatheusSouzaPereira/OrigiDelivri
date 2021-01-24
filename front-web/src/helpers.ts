
import { ProductsInterface } from "./Orders/types";

export function checkIsSelected(selectedProducts: ProductsInterface[], product: ProductsInterface) {
    return selectedProducts.some(item => item.id === product.id)
}



export function formtPrice(price: number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

    });
    return formatter.format(price);
}