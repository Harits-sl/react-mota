import { numberWithK } from "../utils/StringHelper";

function ItemBuyProduct({ product, onClickOrder }) {
  return (
    <>
      <div
        className="card rounded-4 p-4 bg-dark mb-2 mx-0 mb-4"
        style={{ height: "23rem" }}
      >
        <img
          src={product.image}
          className="overflow-hidden object-fit-cover rounded-4 h-100"
          alt="..."
        />
        <div className="card-body p-0 mx-2 mt-3">
          <p className="card-title text-light fw-semibold fs-5 mb-0">
            {product.name}
          </p>
          <p className="card-text text-light-secondary">
            {product.description}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <p className="card-text text-light fw-semibold fs-3 m-0">
              {numberWithK(product.price)}
            </p>
            <button
              type="button"
              className="btn btn-cream rounded-pill px-4 py-1"
              onClick={() => onClickOrder(product)}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemBuyProduct;
