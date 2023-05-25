import { useRecoilState, useRecoilValue } from "recoil";
import cartsState, { cartQuantityState } from "atoms/cartsState";
import useCartQuantity from "hooks/useCartQuantity";
import CartList from "./CartList";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartsState);
  const totalQuantity = useRecoilValue(cartQuantityState);
  const { totalPrice } = useCartQuantity();

  return (
    <section className={styles.cart_section}>
      <div className={styles.cart_list_wrap}>
        {cartItem.length <= 0 ? (
          <h1>Your Cart Is Empty! ADD SOME PRODUCTS</h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}
      </div>
      {cartItem.length > 0 && (
        <div className={styles.cart_quantity_section}>
          <h1>Total Amount</h1>
          <div className={styles.cart_quantity_wrap}>
            <div className={styles.cart_quantity}>
              <p>Qty: </p>
              <p>{totalQuantity}</p>
            </div>
            <div className={styles.cart_grand_price}>
              <p>Grand Total: </p>
              <p>IDR {totalPrice()}</p>
            </div>
          </div>
          <button>To CheckOut</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
