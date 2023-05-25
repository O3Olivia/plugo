import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import productsState from "atoms/productsState";
import cartsState from "atoms/cartsState";

const useProductItems = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [cartItem, setCartItem] = useRecoilState(cartsState);
  const { id } = useParams();

  const handleCreate = (
    category,
    imageUrls,
    price,
    title,
    description,
    size
  ) => {
    const newProduct = {
      id: new Date().toISOString(),
      category,
      imageUrls,
      price,
      title,
      description,
      size,
    };
    setProducts([...products, newProduct]);
  };

  const findProduct = products.find((item) => item.id === id);

  // 같은 상품을 cart에 담으면 장바구니 quantity가 늘어나지 않는다.
  const handleAddToCart = (quantity) => {
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

  return {
    products,
    handleCreate,
    findProduct,
    handleAddToCart,
  };
};

export default useProductItems;
