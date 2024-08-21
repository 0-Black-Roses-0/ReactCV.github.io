import React from 'react';
import styles from '../style/index.module.css';
import Copration from '../img/copration.jpg';
import ContactUs from './contacus';

const Home = () => {
  return (
    <>
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

        <section className={styles.paragraphSection}>
          <h2>Start a Life Time Job With Us</h2>
        </section>

        <section className={styles.paragraph}>
          <div className={styles.paragraphtxt}>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor, enim ut molestie venenatis, justo turpis luctus diam, at consectetur nisi nibh euismod ex. Sed ut nisi ut risus sollicitudin condimentum at vitae orci. In sed lectus vitae lectus faucibus congue. Curabitur ac feugiat enim. Aenean finibus lorem non tortor posuere, nec fermentum lacus commodo. Curabitur sagittis, sapien et pharetra faucibus, mauris nisl suscipit sapien, ut feugiat sapien mauris ut erat. Suspendisse suscipit tincidunt metus et volutpat. Proin quis ante vehicula, tempus massa a, tempor quam. Pellentesque in urna interdum, sollicitudin lectus at, bibendum orci. Mauris accumsan suscipit urna id iaculis. Sed volutpat diam nibh, nec scelerisque enim maximus vitae. Suspendisse consectetur ullamcorper nunc, lobortis fringilla metus sagittis a. Nullam id blandit lacus. In at elit eget dolor semper ullamcorper ac quis eros.</p>
          </div>

          <div className={styles.paragraphimg}>
            <img src={Copration} alt="" />
          </div>
        </section>


      </div>

      <ContactUs />
    </>
  );
};

export default Home;
