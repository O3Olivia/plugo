import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import productsState from "atoms/productsState";

const useProductItems = () => {
  const [products, setProducts] = useRecoilState(productsState);
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

  return {
    products,
    handleCreate,
    findProduct,
  };
};

export default useProductItems;
