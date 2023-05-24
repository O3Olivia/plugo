import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { id, imageUrls, price, title } = props;

  return (
    <div className={styles.product_item_section}>
      <Link to={`/products/${id}`}>
        <div className={styles.product_item_section_image}>
          <img src={imageUrls} alt={title} />
        </div>
        <div className={styles.product_item_section_title}>
          <h1>{title}</h1>
          <p>RP {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
