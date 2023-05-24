import { RecoilRoot } from "recoil";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import ProductPage from "pages/products";
import ProductDetailPage from "./pages/productsDetail";
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
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
