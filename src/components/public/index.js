import React from 'react';
import styles from '../style/index.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2>Welcome to MyWebsite</h2>
          <p>Your solution for modern web development</p>
          <a href="#services" className={styles.ctaButton}>Explore Services</a>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <h3>Web Design</h3>
            <p>Beautiful and responsive web design services.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Development</h3>
            <p>High-quality web development using the latest technologies.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>SEO Optimization</h3>
            <p>Optimize your site to rank higher on search engines.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
