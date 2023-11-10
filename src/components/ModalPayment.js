import ItemOrderSummary from "./ItemOrderSummary";
import { numberWithDot } from "../utils/StringHelper";

const ModalPayment = ({
  product,
  paymentMethod,
  transferReceipt,
  handlePaymentMethod,
  handleTransferReceipt,
  handleCheckout,
}) => {
  const { items, total } = product;

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Order Summary
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              {items.map((item) => {
                return <ItemOrderSummary item={item} />;
              })}
              <hr className="hr text-light my-2" />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="m-0">Order Total</p>
                <p className="m-0 fs-5 fw-semibold text-cream">
                  Rp {numberWithDot(total)}
                </p>
              </div>
            </div>
            <div className="modal-footer d-block">
              <p className="my-2">Payment Method</p>
              <div className="d-flex">
                <input
                  type="radio"
                  className="btn-check"
                  name="option"
                  id="option1"
                  value={"cashier"}
                  onChange={handlePaymentMethod}
                  checked={paymentMethod === "cashier"}
                />
                <label className="btn btn-outline-warning me-2" for="option1">
                  Cashier
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  value={"BCA"}
                  onChange={handlePaymentMethod}
                  checked={paymentMethod === "BCA"}
                />
                <label className="btn  btn-outline-warning" for="option2">
                  BCA
                </label>
              </div>
              <div className={paymentMethod !== "BCA" && "d-none"}>
                <p className="mb-1 mt-2">BCA / NO REK : 1043394746</p>
                <div className="d-flex">
                  <p className="m-0 w-50">Upload Payment</p>
                  <input type="file" onChange={handleTransferReceipt} />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-cream mx-auto mt-3 d-block w-100 rounded-2 text-dark"
                onClick={handleCheckout}
                disabled={paymentMethod === "BCA" && transferReceipt === null}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPayment;
