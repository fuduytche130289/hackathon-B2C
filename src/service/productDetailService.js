import {Axios} from "./Axios";

export function getProductDetail(id) {
    return Axios.get("products/" + id);
}


export const productDetailService = {
    getProductDetail
};