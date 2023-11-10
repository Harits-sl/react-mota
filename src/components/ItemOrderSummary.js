import React from "react";
import { numberWithDot } from "../utils/StringHelper";

const ItemOrderSummary = ({ item }) => {
  return (
    <>
      <div className="d-flex align-items-center my-3">
        <img
          src={item.image}
          alt=""
          className="rounded-3"
          style={{ width: 80, height: 80, objectFit: "cover" }}
        />
        <div className="ms-2">
          <p className="m-0 fw-semibold">{item.name}</p>
          <p className="m-0 text-light-secondary">
            {numberWithDot(item.price)} x {item.quantity}
          </p>
        </div>
        <div className="ms-auto fw-semibold">
          <p className="m-0">{numberWithDot(item.price * item.quantity)}</p>
        </div>
      </div>
    </>
  );
};

export default ItemOrderSummary;
