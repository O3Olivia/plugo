import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import cartsState from "atoms/cartsState";
import ProductQuantityForm from "components/UI/ProductQuantityForm";
import styles from "./ProductDetail.module.css";
import useProductItems from "hooks/useProductItems";

const ProductDetail = (props) => {
  const { id } = useParams();
  const [cartItem, setCartItem] = useRecoilState(cartsState);
  const { findProduct } = useProductItems(id);
  const handleAddToCart = (quantity) => {
    // 같은 상품을 cart에 담으면 장바구니 quantity가 늘어나지 않는다.
    if (cartItem.findIndex(({ id }) => id === findProduct.id) === -1) {
      setCartItem((prevState) => [
        ...prevState,
        {
          ...findProduct,
          quantity: quantity,
        },
      ]);
    } else {
      setCartItem((prevState) =>
        prevState.map((item) =>
          item.id === findProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  return (
    <section className={styles.product_detail_section}>
      <div className={styles.product_detail_wrap}>
        <div className={styles.product_detail_section_image_section}>
          <div>
            <img src={findProduct.imageUrls} alt={findProduct.title} />
          </div>
        </div>
        <div className={styles.product_detail_section_info}>
          <section>
            <p>{findProduct.category}</p>
            <h1>{findProduct.title}</h1>
            <p>RP {findProduct.price}</p>
            <div>
              <ProductQuantityForm onAddToCart={handleAddToCart} />
            </div>
            <p>
              <strong>COLOR: </strong>
              {findProduct.color}
            </p>
            <p>
              <strong>SIZE: </strong>
              {findProduct.size}
            </p>
            <p>{findProduct.description}</p>
          </section>
          <div className={styles.product_detail_section_delivery}>
            <h1>Delivery</h1>
            <p>
              Shipping to Indonesia in 24hours,
              <br />
              (After payment confirmed)
            </p>
          </div>
          <button>Send a message to Gonegani?</button>
        </div>
        <div className={styles.product_detail_section_suggest_items}></div>
      </div>
    </section>
  );
};

export default ProductDetail;
