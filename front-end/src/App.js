import { RecoilRoot } from "recoil";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import ProductPage from "pages/products";
import ProductDetailPage from "./pages/productsDetail";
import CartPage from "./pages/cart";
import "./App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <RecoilRoot>
      <UseScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
