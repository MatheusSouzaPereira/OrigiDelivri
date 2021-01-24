export type ProductsInterface = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {

    address: string
    latitude: number;
    longitude: number;
}

type ProductID = {
    id: number;
}


export type OrderPayload = {
    products: ProductID[];

} & OrderLocationData;