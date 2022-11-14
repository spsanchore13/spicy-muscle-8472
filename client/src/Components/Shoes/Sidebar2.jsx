import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Sidebar2.module.css";

const Sidebar2 = () => {
  return (
    <div className={styles.maindiv}>
      <p className={styles.firstp}>Browse by:</p>
      <hr className={styles.apnahr} />

      <div className={styles.atag}>
        <a href="#">New!</a>
        <a href="#">Boots & Booties</a>
        <a href="#">Clod Weather Boots</a>
        <a href="#">Dresses</a>
        <a href="#">Flats</a>
        <a href="#">Heels & Wedges</a>
        <a href="#">Mules & Clogs</a>
        <a href="#">Sandles</a>
        <a href="#">Slippers</a>

        <a href="#">Sneakers</a>

        <a href="#">Socks & Tights</a>

        <a href="#">Petites</a>
        <a href="3">Plus</a>
        <a href="#">Sets</a>
        <a href="3">Shorts</a>
        <a href="#">Skirts</a>
        <a href="3">Sleepwear</a>
        <a href="#">Sweaters</a>
        <a href="#">Swimwear</a>
        <a href="#">Tops & Tees</a>
      </div>

      <p className={styles.firstp}>Filter by:</p>
      <hr className={styles.apnahr} />

      {/* //bootstrap part */}

      <div className={styles.acd}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <p className="accordion-header pricetag" id="flush-headingOne">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Price
              </button>
            </p>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className={styles.btdiv}>
                  <button>
                    <a href="">Less than $25 (45)</a>
                  </button>
                  <button>
                    <a href="">$25 -$50 (154)</a>
                  </button>
                  <button>
                    <a href="">$50 -$100 (954)</a>
                  </button>
                  <button>
                    <a href="">$100 -$200 (1560)</a>
                  </button>
                  <button>
                    <a href="">$200 -$500 (776)</a>
                  </button>
                  <button>
                    <a href="">More than $500 (143)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <p className="accordion-header" id="flush-headingTwo">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Color
              </button>
            </p>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ">
                <div className={styles.btdiv2}>
                  <button>
                    <a href="">White (930)</a>
                  </button>
                  <button>
                    <a href="">Blue (884)</a>
                  </button>
                  <button>
                    <a href="">Black (760)</a>
                  </button>
                  <button>
                    <a href="">Assorted (594))</a>
                  </button>
                  <button>
                    <a href="">Green (443)</a>
                  </button>
                  <button>
                    <a href="">Pink (370)</a>
                  </button>
                  <button>
                    <a href="">Beige (276)</a>
                  </button>
                  <button>
                    <a href="">Orange (276)</a>
                  </button>
                  <button>
                    <a href="">Red (276)</a>
                  </button>
                  <button>
                    <a href="">Purple (276)</a>
                  </button>
                  <button>
                    <a href="">Yellow (276)</a>
                  </button>
                  <button>
                    <a href="">Brown (276)</a>
                  </button>
                  <button>
                    <a href="">Gray (276)</a>
                  </button>
                  <button>
                    <a href="">Mint (276)</a>
                  </button>
                  <button>
                    <a href="">Gold (276)</a>
                  </button>
                  <button>
                    <a href="">Light Wash (276)</a>
                  </button>
                  <button>
                    <a href="">Silver (276)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Brand
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className={styles.btdiv2}>
                  <button>
                    <a href="">4SI3NNA</a>
                  </button>
                  <button>
                    <a href="">525 (2)</a>
                  </button>
                  <button>
                    <a href="">Adelyn Rae (1)</a>
                  </button>
                  <button>
                    <a href=""> Adrianna Papell (6)</a>
                  </button>
                  <button>
                    <a href=""> AG jeans (6)</a>
                  </button>
                  <button>
                    <a href=""> AGOLDE (43)</a>
                  </button>
                  <button>
                    <a href=""> Agua Bendita (25)</a>
                  </button>
                  <button>
                    <a href=""> Agua De Coco (1)</a>
                  </button>
                  <button>
                    <a href=""> Alexandra Farmer (2)</a>
                  </button>
                  <button>
                    <a href=""> Allision New York (1)</a>
                  </button>
                  <button>
                    <a href=""> Amadi (11)</a>
                  </button>
                  <button>
                    <a href="">Ana K (2)</a>
                  </button>
                  <button>
                    <a href=""> Andrea lyamah (5)</a>
                  </button>
                  <button>
                    <a href=""> Anna Sui (8)</a>
                  </button>
                  <button>
                    <a href=""> Another Girl (3)</a>
                  </button>
                  <button>
                    <a href="">Anthrolology (353)</a>
                  </button>
                  <button>
                    <a href="">Aratta (1)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Size
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className={styles.btdiv2}>
                  <button>
                    <a href="">XXS (644)</a>
                  </button>
                  <button>
                    <a href=""> XS (1750)</a>
                  </button>
                  <button>
                    <a href="">XS/S (29)</a>
                  </button>
                  <button>
                    <a href=""> S (1930)</a>
                  </button>
                  <button>
                    <a href=""> S/M (52)</a>
                  </button>
                  <button>
                    <a href=""> M (1941)</a>
                  </button>
                  <button>
                    <a href=""> M/L (441)</a>
                  </button>
                  <button>
                    <a href="">L (1917)(</a>
                  </button>
                  <button>
                    <a href=""> L/XL (47)</a>
                  </button>
                  <button>
                    <a href=""> Xl (1382)</a>
                  </button>
                  <button>
                    <a href=""> XXL (8)</a>
                  </button>
                  <button>
                    <a href="">XXXL (1)</a>
                  </button>
                  <button>
                    <a href=""> XXS P (217)</a>
                  </button>
                  <button>
                    <a href=""> XS p(349)</a>
                  </button>
                  <button>
                    <a href=""> XS/S P(2)</a>
                  </button>
                  <button>
                    <a href="">S tall (6)</a>
                  </button>
                  <button>
                    <a href="">M tall (85)</a>
                  </button>
                  <button>
                    <a href="">L tall (28)</a>
                  </button>
                  <button>
                    <a href="">XL tall (200)</a>
                  </button>
                  <button>
                    <a href="">XXl tall (34)</a>
                  </button>
                  <button>
                    <a href="">XXXL tall (23)</a>
                  </button>
                  <button>
                    <a href="">XXXL tall (75)</a>
                  </button>
                  <button>
                    <a href="">M tall (16)</a>
                  </button>
                  <button>
                    <a href="">M tall (98)</a>
                  </button>
                  <button>
                    <a href="">M tall (48)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                In Stoke
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className={styles.btdiv3}>
                  <button>
                    <a href="">Ready to ship (3472)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                style={{ width: "200px" }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Free Pickup
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className={styles.btdiv4}>
                  <p>Store pickup at:</p>
                  <button>
                    <a href="">Ready to ship (3472)</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
