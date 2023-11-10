import ItemBuyProduct from "../components/ItemBuyProduct";
import Navbar from "../components/Navbar";
import ItemOrderProduct from "../components/ItemOrderProduct";
import { useEffect, useState } from "react";
import { numberWithDot } from "../utils/StringHelper";
import ModalPayment from "../components/ModalPayment";

function OrderPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });
  const [paymentMethod, setPaymentMethod] = useState("cashier");
  const [transferReceipt, setTransferReceipt] = useState(null);

  const fetchProduct = () => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  const onClickOrder = (product) => {
    // cari index dari orders
    const indexItem = cart["items"].findIndex((item) => item.id === product.id);

    // jika  indexItem -1 atau tidak ada maka tambahkan data
    // jika indexItem lebih dari 0, atau pencarian index data ada
    // tambah quantity order
    if (indexItem === -1) {
      const obj = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      setCart({
        items: [...cart["items"], obj],
        total: (cart["total"] += product.price),
      });
    } else {
      const quantityPlus = cart["items"][indexItem].quantity + 1;

      // change quantity in cart
      cart["items"][indexItem].quantity = quantityPlus;

      setCart({
        items: [...cart["items"]],
        total: (cart["total"] += product.price),
      });
    }
  };

  const onIncrementPressed = (id) => {
    const indexItem = cart["items"].findIndex((item) => item.id === id);
    const quantityPlus = cart["items"][indexItem].quantity + 1;

    // change quantity in cart
    cart["items"][indexItem].quantity = quantityPlus;

    setCart({
      items: [...cart["items"]],
      total: (cart["total"] += cart["items"][indexItem].price),
    });
  };

  const onDecrementPressed = (id) => {
    const indexItem = cart["items"].findIndex((item) => item.id === id);
    const priceItem = cart["items"][indexItem].price;
    const quantityMinus = cart["items"][indexItem].quantity - 1;
    // change quantity in cart
    cart["items"][indexItem].quantity = quantityMinus;

    if (cart["items"][indexItem].quantity === 0) {
      cart["items"].splice(indexItem, 1);
    }
    setCart({
      items: [...cart["items"]],
      total: (cart["total"] -= priceItem),
    });
  };

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleTransferReceipt = (event) => {
    setTransferReceipt(event.target.files[0]);
  };

  const handleCheckout = async () => {
    const formData = new FormData();
    const status = paymentMethod === "cashier" ? "Pembayaran" : "Di Proses";
    let orderProducts = [];

    cart["items"].map((item) => {
      const obj = {
        id_product: item.id,
        quantity: item.quantity,
      };

      return (orderProducts = [...orderProducts, obj]);
    });

    formData.append("idCustomer", localStorage.getItem("id-customer"));
    formData.append("orderProduct", JSON.stringify(orderProducts));
    formData.append("total", cart["total"]);
    formData.append("status", status);
    formData.append("paymentMethod", paymentMethod);
    // jika payment methodnya menggunakan bca
    // tambahkan data receipt dan juga pay ke form
    if (paymentMethod === "BCA") {
      formData.append("transferReceipt", transferReceipt);
      formData.append("pay", cart["total"]);
    }

    fetch("http://127.0.0.1:8000/api/transactions", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = "/transaction"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      {!products["success"] && (
        <div
          className="spinner-border text-light position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="container">
        <div className="row">
          {/* left section */}
          <div className={cart["items"].length > 0 ? "col-8" : "col-12"}>
            <div className="row">
              {products["success"] && (
                <>
                  <h1 className="text-light fs-2">Our Products</h1>
                  <p className="text-light-secondary">
                    We provide the best quality products <br /> for you to enjoy
                    your day with us.
                  </p>
                  {products["data"].map((product) => {
                    return (
                      <div
                        className={cart["items"].length > 0 ? "col-4" : "col-3"}
                        key={product.id}
                      >
                        <ItemBuyProduct
                          product={product}
                          onClickOrder={onClickOrder}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          {/* right content */}
          {cart["items"].length > 0 && (
            <div
              className="col-4 bg-dark text-light d-flex flex-column p-3 rounded-4 border sticky-top"
              style={{
                height: "fit-content",
                top: 100,
                minHeight: 0,
                maxHeight: "70vh",
              }}
            >
              <div
                style={{
                  maxHeight: "60vh",
                  overflowY: "auto",
                }}
              >
                {cart["items"].map((order) => {
                  return (
                    <ItemOrderProduct
                      order={order}
                      onIncrementPressed={onIncrementPressed}
                      onDecrementPressed={onDecrementPressed}
                    />
                  );
                })}
              </div>
              <hr className="hr text-light" />
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>Rp {numberWithDot(cart["total"])}</p>
              </div>
              <button
                type="button"
                className="btn btn-cream rounded-pill px-4 py-2 text-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Pay
              </button>
            </div>
          )}
        </div>
      </div>
      <ModalPayment
        product={cart}
        paymentMethod={paymentMethod}
        transferReceipt={transferReceipt}
        handlePaymentMethod={handlePaymentMethod}
        handleTransferReceipt={handleTransferReceipt}
        handleCheckout={handleCheckout}
      />
    </>
  );
}

export default OrderPage;
