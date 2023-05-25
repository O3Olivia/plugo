import { useRef, useState } from "react";

import Input from "components/UI/Input";
import styles from "./ProductQuantityForm.module.css";

const ProductQuantityForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={styles.product_detail_quantity} onSubmit={handleSubmit}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>ADD TO CART</button>
    </form>
  );
};

export default ProductQuantityForm;
