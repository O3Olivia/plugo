import useProductItems from "hooks/useProductItems";
import ProductItem from "components/Product/ProductItem";
import ProductApi from "model/apis/ProductApi";

import styles from "./Products.module.css";

const Products = () => {
  const { products } = useProductItems();

  return (
    <section className={styles.products_section}>
      <div className={styles.products_wrap}>
        <div className={styles.products_banner}>
          <p>ALL PRODUCT</p>
        </div>
        <div className={styles.products_sidebar}>Category</div>
        <div className={styles.products_list_wrap}>
          <ProductApi />
          {products?.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
