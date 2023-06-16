import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heroPage}>
          <div className={styles.heroSection}>
            <h1>FIND YOUR FAVORITE CARDS NOW!</h1>
            <p>BUY AND OPEN PACKS TO COLLECT YOUR FAVORITE CARDS</p>
            <button 
              className={styles.heroButton}
              onClick={() => window.location.href = "/shop"}
            >Shop Packs</button>
          </div>
          <div>
          </div>
        </div>
    </div>
  );
};

export default Home;