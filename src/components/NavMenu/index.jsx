import styles from "./menu.module.scss";
import { VisibleContext, useContext } from "../../Context/ProductContext.jsx";

export default function NavMenu() {
  const { menu, setMenu } = useContext(VisibleContext);

  return (
    <div
      className={styles.container}
      style={{
        left: menu && "0px",
      }}
    >
      <div className={styles.nav}>
        <div className={styles.close_btn} onClick={() => setMenu(false)}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_271_253)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.596 0.781982L13.718 2.90398L9.11998 7.49898L13.717 12.096L11.595 14.218L6.99998 9.61998L2.40498 14.217L0.282982 12.095L4.87798 7.49998L0.281982 2.90398L2.40398 0.781982L6.99898 5.37798L11.596 0.781982Z"
                fill="#68707D"
              />
            </g>
            <defs>
              <clipPath id="clip0_271_253">
                <rect width="14" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div>Collection</div>
        <div>Men</div>
        <div>Women</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className={styles.overflow} onClick={() => setMenu(false)}></div>
    </div>
  );
}
