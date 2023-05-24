import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_section}>
        <div className={styles.footer_item}>
          <div className={styles.footer_item_company_info}>
            <h1>GoneGani</h1>
            <p>Phone: +6281234567890</p>
            <p>Bandung, West Java, Indonesia</p>
            <p>Since 2019</p>
          </div>
        </div>
        <div className={styles.footer_item}>
          <div className={styles.footerItem_payment_info}>
            <h4>Payment Method</h4>
            <h4>Shipping Method</h4>
          </div>
        </div>
        <div className={styles.footer_item}>
          <div className={styles.footer_item_term_of_condition}>
            <h4>
              <Link to="/">Terms & Conditions</Link>
            </h4>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
