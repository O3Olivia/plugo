import { atom, selector } from "recoil";

export const DEFAULT_CARTS_STATE = [];

const cartsState = atom({
  key: "cartsState",
  default: DEFAULT_CARTS_STATE,
});

export const cartQuantityState = selector({
  key: "cartQuantityState",
  get: ({ get }) => {
    const currentItem = get(cartsState);
    return currentItem.length.toLocaleString();
  },
});

export default cartsState;
