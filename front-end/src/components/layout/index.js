import Navigation from "./Navigation";
import Footer from "./Footer";
import * as $ from "./styles";

const Layout = (props) => {
  const { children } = props;
  return (
    <$.LayoutSection>
      <Navigation />
      {children}
      <Footer />
    </$.LayoutSection>
  );
};

export default Layout;
