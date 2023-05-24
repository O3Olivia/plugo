import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import productsState from "atoms/productsState";

const useProductItems = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const { id } = useParams();

  return {
    products,
  };
};

export default useProductItems;
