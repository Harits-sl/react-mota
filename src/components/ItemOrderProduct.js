import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberWithDot } from "../utils/StringHelper";

function ItemOrderProduct({ order, onIncrementPressed, onDecrementPressed }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <p className="fw-semibold m-0">{order.name}</p>
          <p className="fw-light text-light-secondary m-0">
            {numberWithDot(order.price)}
          </p>
        </div>
        <div className="d-flex align-items-center bg-white rounded-4">
          <button
            type="button"
            className="btn btn-grey p-0"
            onClick={() => onDecrementPressed(order.id)}
            style={{ width: "1.8rem", height: "1.8rem" }}
          >
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </button>
          <p className="px-3 m-0 text-dark fw-light">{order.quantity}</p>
          <button
            type="button"
            className="btn btn-grey p-0 "
            onClick={() => onIncrementPressed(order.id)}
            style={{ width: "1.8rem", height: "1.8rem" }}
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemOrderProduct;
