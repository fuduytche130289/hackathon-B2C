import {Axios} from "./Axios";

export function getProductDetail(id) {
    return Axios.get("product/" + id);
}


export const productDetailService = {
    getProductDetail
};