import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "assets/images/img_logo.png";
import * as $ from "./styles";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setNavBackground(true) : setNavBackground(false);
    });
  }, []);

  return (
    <$.NavigationSection navBackground={navBackground}>
      <$.NavigationLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </$.NavigationLogo>
      <$.Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Product</Link>
          </li>
          <li>
            <Link
              to="https://drive.google.com/drive/u/1/folders/1wXuq6Dtud8Fxx2h-hbMzSXO2N5N_zSQX"
              target="_blank"
            >
              How to order
            </Link>
          </li>
        </ul>
      </$.Navigation>
      <$.NavigationLogin>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/cart">
              <MdOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </$.NavigationLogin>
    </$.NavigationSection>
  );
};

export default Navigation;
