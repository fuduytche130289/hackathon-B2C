import {Axios} from "./Axios";

export function getHome() {
    return Axios.get("product");
}

export const homeService = {
    getHome
};