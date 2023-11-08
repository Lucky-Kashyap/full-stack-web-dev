import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <h3 className={`${styles.footerData} lead`}>
        &copy; build by divyanshu calculator project @2023
      </h3>
    </div>
  );
};

export default Footer;
