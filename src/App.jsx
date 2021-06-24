import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Fade from "react-reveal/Fade";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import Header from "./components/Header/Header";
import ProductCardBasket from "./components/ProductCardBasket/ProductCardBasket";
import ProductModalCard from "./components/ProductModalCard/ProductModalCard";
import { productList } from "./data/data";

function App() {
  const [lgShow, setLgShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const [filters, setFilters] = useState({ price: null, size: null });
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [cartItems, setCardItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const handleClose = () => setLgShow(false);
  const handleCloseBtn = (product, id) => {
    addToCard(product, id);
    setLgShow(false);
  };
  const handleShow = (product) => {
    setProductModal({ ...product });
    setLgShow(true);
  };
  useEffect(() => {
    if (filters.size) {
      setFilteredProductList(
        productList.filter((item) => item.size === filters.size)
      );
    } else {
      setFilteredProductList(productList);
    }
  }, [filters.size]);
  useEffect(() => {
    if (filters.price === "-1") {
      setFilteredProductList(
        filteredProductList.sort((a, b) => b.price - a.price)
      );
    } else if (filters.price === "1") {
      setFilteredProductList(
        filteredProductList.sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProductList(filteredProductList.sort((a, b) => a.id - b.id));
    }
  }, [filters.price]);

  const addToCard = (product, id) => {
    setTotalPrice([...totalPrice, +product.price]);
    if (cartItems.some((item) => item.id === product.id)) {
      let index = cartItems.findIndex((item) => item.id === id);
      let c = ++cartItems[index].countResult;
      setCardItems(
        cartItems.map((item) => (item.id === id ? { ...item, count: c } : item))
      );
    } else {
      setCardItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const removeCartItem = (cart, id) => {
    setCardItems(cartItems.filter((item) => item.id !== id));
    setTotalPrice(totalPrice.filter((item) => item !== +cart.price));
  };

  return (
    <div>
      <Header />
      <main className={"d-flex flex-column flex-md-row"}>
        <div className={"left-shop"}>
          <section className={"section-filterCard"}>
            <ProductFilters
              filters={filters}
              setFilters={setFilters}
              resultCount={filteredProductList.length}
            />
          </section>
          <section className={"section-products"}>
            <div className={"product-row1"}>
              {filteredProductList.map((product) => (
                <Fade left>
                  <div key={product.id} className={"product-item"}>
                    <ProductCard
                      srcImg={product.srcImg}
                      title={product.title}
                      price={product.price}
                      onClick={() => addToCard(product, product.id)}
                      onClickModal={() => handleShow(product)}
                    />
                  </div>
                </Fade>
              ))}
            </div>
          </section>
        </div>
        <section className="right-shop">
          <p className={"title-cart"}>
            You have {cartItems.length} in the Cart
          </p>
          {cartItems.map((cart) => (
            <Fade left>
              <div key={cart.id} className="basket-cartItem">
                <ProductCardBasket
                  countCart={cart.count}
                  srcImg={cart.srcImg}
                  titleCart={cart.title}
                  price={cart.price}
                  onClick={() => removeCartItem(cart, cart.id)}
                />
              </div>
            </Fade>
          ))}

          {cartItems.length > 0 ? (
            <div className="cart-footer mt-4">
              <h5>
                Total: $
                {totalPrice
                  .reduce((total, item) => (total += item), 0)
                  .toFixed(1)}
              </h5>
              <button>Proceed</button>
            </div>
          ) : (
            ""
          )}
        </section>
      </main>

      <ProductModalCard
        show={lgShow}
        handleClose={handleClose}
        srcImg={productModal.srcImg}
        title={productModal.title}
        size={productModal.size}
        price={productModal.price}
        onClick={() => handleCloseBtn(productModal, productModal.id)}
      />
      <footer className="bg-dark d-flex justify-content-center p-3">
        <div>
          <span className="text-white">All right is reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
