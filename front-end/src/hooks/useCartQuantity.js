import cartsState from "atoms/cartsState";
import { useRecoilState } from "recoil";

const useCartQuantity = (id) => {
  const [cartItem, setCartItem] = useRecoilState(cartsState);

  const handleIncreaseQuantity = () => {
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItem(updatedCart);
  };

  const handleDecreaseQuantity = () => {
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItem(updatedCart);
  };
  const handleDeleteQuantity = () => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));
    return total.toLocaleString("id-ID");
  };

  return {
    totalPrice,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleDeleteQuantity,
  };
};

export default useCartQuantity;
