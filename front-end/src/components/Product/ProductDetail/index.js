import { useParams } from "react-router-dom";
import ProductQuantityForm from "components/UI/ProductQuantityForm";
import styles from "./ProductDetail.module.css";
import useProductItems from "hooks/useProductItems";
import useModal from "hooks/useModal";
import Modal from "components/UI/Modal";

const ProductDetail = (props) => {
  const { id } = useParams();
  const { findProduct, handleAddToCart } = useProductItems(id);
  const {
    showModal,
    message,
    handleOpenModal,
    handleCloseModal,
    handleMessageChange,
    handleSendMessage,
  } = useModal();

  const handleAddToCartClick = (quantity) => {
    handleAddToCart(quantity);
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
              <ProductQuantityForm onAddToCart={handleAddToCartClick} />
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
          <button onClick={handleOpenModal}>Send a message to Gonegani?</button>
        </div>
        <div className={styles.modal_section}>
          <Modal isOpen={showModal} onClose={handleCloseModal}>
            <h2>What would you like to ask about this product?</h2>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message..."
            />
            <button onClick={handleSendMessage}>SEND</button>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
