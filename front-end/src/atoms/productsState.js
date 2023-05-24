import { atom } from "recoil";

export const DEFAULT_PRODUCTS_STATE = [];

const productsState = atom({
  key: "productsState",
  default: DEFAULT_PRODUCTS_STATE,
});

export default productsState;
