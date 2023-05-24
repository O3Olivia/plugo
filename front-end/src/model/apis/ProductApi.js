import { useEffect } from "react";
import { useRecoilState } from "recoil";
import productsState from "atoms/productsState";
import axios from "axios";

const ProductApi = () => {
  const [products, setProducts] = useRecoilState(productsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        setProducts(response.data);
      } catch (error) {
        console.log("패치 에러", error);
      }
    };

    fetchData();
  }, [setProducts]);

  return null;
};

export default ProductApi;
