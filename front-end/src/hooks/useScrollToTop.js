import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

const topButtonStyle = {
  position: "fixed",
  zIndex: "100",
  bottom: "40px",
  right: "20px",
  width: "50px",
  height: "50px",
  border: "1px solid #eee",
  borderRadius: "50px",
  backgroundColor: "#e9e4dd",
};

const UseScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button style={topButtonStyle} onClick={scrollToTop} type="button">
      <HiChevronDoubleUp size="22" />
    </button>
  ) : null;
};

export default UseScrollToTop;
