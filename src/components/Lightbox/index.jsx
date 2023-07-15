import styles from "./lightbox.module.scss";

import Img1 from "../../assets/images/image-product-1.jpg";
import Img2 from "../../assets/images/image-product-2.jpg";
import Img3 from "../../assets/images/image-product-3.jpg";
import Img4 from "../../assets/images/image-product-4.jpg";
import { useState } from "react";
import { useContext, VisibleContext } from "../../Context/ProductContext";

export default function Lightbox() {
  const images = [Img1, Img2, Img3, Img4];

  const [activeIndex, setActiveIndex] = useState(0);

  const { lightbox, setLightbox } = useContext(VisibleContext);


  return (
    <div
      className={styles.container}
      style={{
        display: lightbox && "flex",
      }}
    >
      <div className={styles.image_wrapper}>
        <div className={styles.close_btn} onClick={() => setLightbox(false)}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2225 0L21.5571 3.33457L14.3316 10.5553L21.5555 17.7791L18.2209 21.1137L11.0002 13.8883L3.7795 21.1121L0.444931 17.7776L7.66565 10.5569L0.443359 3.33457L3.77793 0L10.9986 7.22229L18.2225 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.image}>
          <img
            src={images[activeIndex]}
            alt="pic"
            height={"550px"}
            width={"550px"}
          ></img>
        </div>
        <div className={styles.images}>
          {images.map((image, index) => {
            return (
              <div
                className={
                  activeIndex === index ? styles.active : styles.thumbnail
                }
                onClick={() => setActiveIndex(index)}
              >
                <img src={image} alt="pic" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
