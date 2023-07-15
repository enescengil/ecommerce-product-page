import { useState } from "react";
import { ProductContext, VisibleContext } from "./Context/ProductContext";

//COMPONENTS
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Lightbox from "./components/Lightbox";
import NavMenu from "./components/NavMenu";

function App() {
  const [product, setProduct] = useState({
    productBrand: "sneaker company",
    productName: "Fall Limited Edition Sneakers",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: {
      price: 250.0,
      currentPrice: 125.0,
    },
    productDiscount: 50,
  });
  const [cart, setCart] = useState({
    count: 0,
    total: 0,
    product,
  });

  const [lightbox, setLightbox] = useState(false);
  const [menu, setMenu] = useState(false);

  const data = {
    product,
    setProduct,
    cart,
    setCart,
  };
  return (
    <ProductContext.Provider value={data}>
      <VisibleContext.Provider value={{ lightbox, setLightbox, menu, setMenu }}>
        <NavMenu />
        <Lightbox />
        <Navbar />
        <Product />
      </VisibleContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
