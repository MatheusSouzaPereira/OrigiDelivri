import axios from 'axios'
import { OrderPayload } from '../Orders/types';
const base_url = 'https://origi-delivry.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX


export function fetchProducts() {
    return axios(`${base_url}/products`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}

    `)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${base_url}/orders`, payload)
}