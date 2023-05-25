import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import useCartQuantity from "hooks/useCartQuantity";
import styles from "./CartList.module.css";

const CartList = ({ data }) => {
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleDeleteQuantity,
  } = useCartQuantity(data.id);

  return (
    <section className={styles.cart_list_section}>
      <div className={styles.cart_list_wrap}>
        <div className={styles.cart_list_card}>
          <div className={styles.cart_list_card_img}>
            <img src={data.imageUrls} alt="product" />
            <div className={styles.cart_list_card_info}>
              <p>{data.title}</p>
              <p>SIZE {data.size}</p>
              <p>RP {data.price}</p>
            </div>
          </div>
        </div>
        <div className={styles.cart_list_card_buttons}>
          <div className={styles.cartListCard_button_delete}>
            <button onClick={handleDeleteQuantity}>
              <BiTrash />
            </button>
          </div>
          <div className={styles.cart_list_card_button_quantity}>
            <button
              onClick={handleDecreaseQuantity}
              disabled={data.quantity === 1}
            >
              <BiMinus />
            </button>
            <span>{data.quantity}</span>
            <button onClick={handleIncreaseQuantity}>
              <BiPlus />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
