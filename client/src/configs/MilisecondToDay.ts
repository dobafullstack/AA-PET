import { NEW_PRODUCT } from "../constants";

export const MilisecondToDay = (date: number) => Math.abs(date * 0.00000001);

const isNewProduct = (createdAt: string) => {
    const date = new Date(createdAt).getTime();

    return MilisecondToDay(Date.now() - date) < NEW_PRODUCT;
}

export default isNewProduct ;