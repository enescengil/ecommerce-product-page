import styles from "./navbar.module.scss";

import Avatar from "../../assets/images/image-avatar.png";
import {
  VisibleContext,
  ProductContext,
  useContext,
} from "../../Context/ProductContext.jsx";
import Cart from "../Cart";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useContext(ProductContext);
  const { setMenu } = useContext(VisibleContext);

  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.burger} onClick={() => setMenu(true)}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 12V15H0V12H16ZM16 6V9H0V6H16ZM16 0V3H0V0H16Z"
                fill="#69707D"
              />
            </svg>
          </div>
          <div className={styles.logo}>
            <svg
              width="136"
              height="24"
              viewBox="0 0 136 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.161 23.372C6.27233 23.372 5.394 23.2583 4.526 23.031C3.67867 22.8037 2.883 22.4833 2.139 22.07C1.41567 21.636 0.795667 21.14 0.279 20.582L2.976 17.854C3.472 18.3913 4.061 18.815 4.743 19.125C5.425 19.4143 6.169 19.559 6.975 19.559C7.533 19.559 7.95667 19.4763 8.246 19.311C8.556 19.1457 8.711 18.9183 8.711 18.629C8.711 18.257 8.525 17.978 8.153 17.792C7.80167 17.5853 7.347 17.4097 6.789 17.265C6.231 17.0997 5.642 16.924 5.022 16.738C4.402 16.552 3.813 16.2937 3.255 15.963C2.697 15.6323 2.24233 15.1777 1.891 14.599C1.53967 13.9997 1.364 13.2453 1.364 12.336C1.364 11.3647 1.612 10.5277 2.108 9.825C2.604 9.10167 3.30667 8.53333 4.216 8.12C5.12533 7.70667 6.18967 7.5 7.409 7.5C8.69033 7.5 9.86833 7.72733 10.943 8.182C12.0383 8.616 12.927 9.267 13.609 10.135L10.912 12.863C10.4367 12.305 9.89933 11.9123 9.3 11.685C8.72133 11.4577 8.153 11.344 7.595 11.344C7.05767 11.344 6.65467 11.4267 6.386 11.592C6.11733 11.7367 5.983 11.9537 5.983 12.243C5.983 12.553 6.15867 12.801 6.51 12.987C6.86133 13.173 7.316 13.3383 7.874 13.483C8.432 13.6277 9.021 13.8033 9.641 14.01C10.261 14.2167 10.85 14.4957 11.408 14.847C11.966 15.1983 12.4207 15.6737 12.772 16.273C13.1233 16.8517 13.299 17.6163 13.299 18.567C13.299 20.0343 12.741 21.202 11.625 22.07C10.5297 22.938 9.04167 23.372 7.161 23.372ZM27.0632 23V14.413C27.0632 13.6277 26.8152 12.9973 26.3192 12.522C25.8439 12.026 25.2342 11.778 24.4902 11.778C23.9736 11.778 23.5189 11.8917 23.1262 12.119C22.7336 12.3257 22.4236 12.6357 22.1962 13.049C21.9689 13.4417 21.8552 13.8963 21.8552 14.413L20.0262 13.514C20.0262 12.336 20.2846 11.3027 20.8012 10.414C21.3179 9.52533 22.0309 8.84333 22.9402 8.368C23.8702 7.872 24.9139 7.624 26.0712 7.624C27.1872 7.624 28.1689 7.89267 29.0162 8.43C29.8842 8.94667 30.5662 9.639 31.0622 10.507C31.5582 11.375 31.8062 12.3257 31.8062 13.359V23H27.0632ZM17.1122 23V7.934H21.8552V23H17.1122ZM43.5325 23.341C41.8998 23.341 40.4428 23.0103 39.1615 22.349C37.9008 21.667 36.9088 20.7267 36.1855 19.528C35.4621 18.3293 35.1005 16.9757 35.1005 15.467C35.1005 13.9583 35.4518 12.615 36.1545 11.437C36.8778 10.2383 37.8491 9.298 39.0685 8.616C40.2878 7.934 41.6621 7.593 43.1915 7.593C44.6795 7.593 45.9918 7.91333 47.1285 8.554C48.2651 9.19467 49.1538 10.0833 49.7945 11.22C50.4558 12.3567 50.7865 13.6587 50.7865 15.126C50.7865 15.3947 50.7658 15.684 50.7245 15.994C50.7038 16.2833 50.6521 16.6243 50.5695 17.017L37.5805 17.048V13.793L48.5545 13.762L46.5085 15.126C46.4878 14.258 46.3535 13.545 46.1055 12.987C45.8575 12.4083 45.4855 11.9743 44.9895 11.685C44.5141 11.375 43.9251 11.22 43.2225 11.22C42.4785 11.22 41.8275 11.3957 41.2695 11.747C40.7321 12.0777 40.3085 12.553 39.9985 13.173C39.7091 13.793 39.5645 14.5473 39.5645 15.436C39.5645 16.3247 39.7195 17.0893 40.0295 17.73C40.3601 18.35 40.8148 18.8357 41.3935 19.187C41.9928 19.5177 42.6955 19.683 43.5015 19.683C44.2455 19.683 44.9171 19.559 45.5165 19.311C46.1158 19.0423 46.6428 18.6497 47.0975 18.133L49.7015 20.737C48.9575 21.605 48.0585 22.256 47.0045 22.69C45.9505 23.124 44.7931 23.341 43.5325 23.341ZM60.6089 23.31C59.2242 23.31 57.9842 22.969 56.8889 22.287C55.8142 21.605 54.9565 20.675 54.3159 19.497C53.6959 18.319 53.3859 16.9757 53.3859 15.467C53.3859 13.9583 53.6959 12.615 54.3159 11.437C54.9565 10.259 55.8142 9.329 56.8889 8.647C57.9842 7.965 59.2242 7.624 60.6089 7.624C61.6215 7.624 62.5309 7.82033 63.3369 8.213C64.1635 8.60567 64.8352 9.15333 65.3519 9.856C65.8685 10.538 66.1579 11.3233 66.2199 12.212V18.722C66.1579 19.6107 65.8685 20.4063 65.3519 21.109C64.8559 21.791 64.1945 22.3283 63.3679 22.721C62.5412 23.1137 61.6215 23.31 60.6089 23.31ZM61.5699 19.032C62.5825 19.032 63.3989 18.7013 64.0189 18.04C64.6389 17.358 64.9489 16.5003 64.9489 15.467C64.9489 14.7643 64.8042 14.1443 64.5149 13.607C64.2462 13.0697 63.8535 12.6563 63.3369 12.367C62.8409 12.057 62.2622 11.902 61.6009 11.902C60.9395 11.902 60.3505 12.057 59.8339 12.367C59.3379 12.6563 58.9349 13.0697 58.6249 13.607C58.3355 14.1443 58.1909 14.7643 58.1909 15.467C58.1909 16.149 58.3355 16.7587 58.6249 17.296C58.9142 17.8333 59.3172 18.257 59.8339 18.567C60.3505 18.877 60.9292 19.032 61.5699 19.032ZM64.7629 23V18.939L65.4759 15.281L64.7629 11.623V7.934H69.4129V23H64.7629ZM83.6334 23L78.3634 15.188L83.6024 7.934H88.9034L82.5794 16.087L82.7344 14.134L89.2134 23H83.6334ZM73.9924 23V0.494H78.7354V23H73.9924ZM98.9292 23.341C97.2966 23.341 95.8396 23.0103 94.5582 22.349C93.2976 21.667 92.3056 20.7267 91.5822 19.528C90.8589 18.3293 90.4972 16.9757 90.4972 15.467C90.4972 13.9583 90.8486 12.615 91.5512 11.437C92.2746 10.2383 93.2459 9.298 94.4652 8.616C95.6846 7.934 97.0589 7.593 98.5882 7.593C100.076 7.593 101.389 7.91333 102.525 8.554C103.662 9.19467 104.551 10.0833 105.191 11.22C105.853 12.3567 106.183 13.6587 106.183 15.126C106.183 15.3947 106.163 15.684 106.121 15.994C106.101 16.2833 106.049 16.6243 105.966 17.017L92.9772 17.048V13.793L103.951 13.762L101.905 15.126C101.885 14.258 101.75 13.545 101.502 12.987C101.254 12.4083 100.882 11.9743 100.386 11.685C99.9109 11.375 99.3219 11.22 98.6192 11.22C97.8752 11.22 97.2242 11.3957 96.6662 11.747C96.1289 12.0777 95.7052 12.553 95.3952 13.173C95.1059 13.793 94.9612 14.5473 94.9612 15.436C94.9612 16.3247 95.1162 17.0893 95.4262 17.73C95.7569 18.35 96.2116 18.8357 96.7902 19.187C97.3896 19.5177 98.0922 19.683 98.8982 19.683C99.6422 19.683 100.314 19.559 100.913 19.311C101.513 19.0423 102.04 18.6497 102.494 18.133L105.098 20.737C104.354 21.605 103.455 22.256 102.401 22.69C101.347 23.124 100.19 23.341 98.9292 23.341ZM109.713 23V7.934H114.456V23H109.713ZM114.456 14.723L112.472 13.173C112.864 11.4163 113.526 10.0523 114.456 9.081C115.386 8.10967 116.677 7.624 118.331 7.624C119.054 7.624 119.684 7.73767 120.222 7.965C120.78 8.17167 121.265 8.50233 121.679 8.957L118.858 12.522C118.651 12.2947 118.393 12.119 118.083 11.995C117.773 11.871 117.421 11.809 117.029 11.809C116.243 11.809 115.613 12.057 115.138 12.553C114.683 13.0283 114.456 13.7517 114.456 14.723ZM129.336 23.372C128.447 23.372 127.569 23.2583 126.701 23.031C125.854 22.8037 125.058 22.4833 124.314 22.07C123.591 21.636 122.971 21.14 122.454 20.582L125.151 17.854C125.647 18.3913 126.236 18.815 126.918 19.125C127.6 19.4143 128.344 19.559 129.15 19.559C129.708 19.559 130.132 19.4763 130.421 19.311C130.731 19.1457 130.886 18.9183 130.886 18.629C130.886 18.257 130.7 17.978 130.328 17.792C129.977 17.5853 129.522 17.4097 128.964 17.265C128.406 17.0997 127.817 16.924 127.197 16.738C126.577 16.552 125.988 16.2937 125.43 15.963C124.872 15.6323 124.417 15.1777 124.066 14.599C123.715 13.9997 123.539 13.2453 123.539 12.336C123.539 11.3647 123.787 10.5277 124.283 9.825C124.779 9.10167 125.482 8.53333 126.391 8.12C127.3 7.70667 128.365 7.5 129.584 7.5C130.865 7.5 132.043 7.72733 133.118 8.182C134.213 8.616 135.102 9.267 135.784 10.135L133.087 12.863C132.612 12.305 132.074 11.9123 131.475 11.685C130.896 11.4577 130.328 11.344 129.77 11.344C129.233 11.344 128.83 11.4267 128.561 11.592C128.292 11.7367 128.158 11.9537 128.158 12.243C128.158 12.553 128.334 12.801 128.685 12.987C129.036 13.173 129.491 13.3383 130.049 13.483C130.607 13.6277 131.196 13.8033 131.816 14.01C132.436 14.2167 133.025 14.4957 133.583 14.847C134.141 15.1983 134.596 15.6737 134.947 16.273C135.298 16.8517 135.474 17.6163 135.474 18.567C135.474 20.0343 134.916 21.202 133.8 22.07C132.705 22.938 131.217 23.372 129.336 23.372Z"
                fill="black"
              />
            </svg>
          </div>
          <nav>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </div>
        <div className={styles.right}>
          <div className={styles.cart}>
            <div
              className={
                cart.count > 0 ? styles.count_visible : styles.count_invisible
              }
              onClick={() =>
                cartVisible ? setCartVisible(false) : setCartVisible(true)
              }
            >
              {cart.count}
            </div>
            <div
              className={styles.cart_icon}
              onClick={() =>
                cartVisible ? setCartVisible(false) : setCartVisible(true)
              }
            >
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_203_427)">
                  <path
                    d="M20.925 4.141H3.86298L3.60998 1.316C3.58999 1.09301 3.48724 0.885582 3.32196 0.734558C3.15669 0.583533 2.94086 0.499856 2.71698 0.5H0.896977C0.659343 0.5 0.431441 0.5944 0.263409 0.762433C0.0953763 0.930465 0.000976563 1.15837 0.000976562 1.396C0.000976563 1.63363 0.0953763 1.86154 0.263409 2.02957C0.431441 2.1976 0.659343 2.292 0.896977 2.292H1.89698L2.92798 13.775C3.00098 14.603 3.44798 15.501 4.21898 16.111C2.82998 17.885 4.09898 20.5 6.35898 20.5C8.23398 20.5 9.55598 18.63 8.91298 16.858H13.818C13.176 18.628 14.495 20.5 16.373 20.5C17.0933 20.4992 17.7839 20.2127 18.2933 19.7033C18.8027 19.194 19.0892 18.5034 19.09 17.783C19.0892 17.0627 18.8027 16.372 18.2933 15.8627C17.7839 15.3533 17.0933 15.0668 16.373 15.066H6.36498C5.68398 15.066 5.09098 14.656 4.83498 14.057L19.156 13.215C19.3465 13.2039 19.5285 13.1322 19.6755 13.0104C19.8224 12.8887 19.9267 12.7231 19.973 12.538L21.794 5.255C21.8269 5.12281 21.8293 4.98485 21.801 4.85159C21.7727 4.71833 21.7144 4.59326 21.6306 4.48589C21.5467 4.37852 21.4395 4.29166 21.3171 4.2319C21.1946 4.17214 21.0602 4.14105 20.924 4.141H20.925ZM6.35798 18.708C6.12009 18.6969 5.89561 18.5946 5.73118 18.4224C5.56675 18.2501 5.475 18.0211 5.475 17.783C5.475 17.5449 5.56675 17.3159 5.73118 17.1436C5.89561 16.9714 6.12009 16.8691 6.35798 16.858C6.59586 16.8691 6.82034 16.9714 6.98477 17.1436C7.14921 17.3159 7.24095 17.5449 7.24095 17.783C7.24095 18.0211 7.14921 18.2501 6.98477 18.4224C6.82034 18.5946 6.59586 18.6969 6.35798 18.708ZM16.373 18.708C16.1351 18.6969 15.9106 18.5946 15.7462 18.4224C15.5817 18.2501 15.49 18.0211 15.49 17.783C15.49 17.5449 15.5817 17.3159 15.7462 17.1436C15.9106 16.9714 16.1351 16.8691 16.373 16.858C16.6109 16.8691 16.8353 16.9714 16.9998 17.1436C17.1642 17.3159 17.256 17.5449 17.256 17.783C17.256 18.0211 17.1642 18.2501 16.9998 18.4224C16.8353 18.5946 16.6109 18.6969 16.373 18.708ZM18.394 11.465L4.59398 12.275L4.02398 5.934H19.777L18.394 11.464V11.465Z"
                    fill="#68707D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_427">
                    <rect
                      width="22"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
          </div>
          <div className={styles.avatar}>
            <img src={Avatar} alt="" height={"50px"} width={"50px"} />
          </div>
        </div>
      </header>
    </>
  );
}
