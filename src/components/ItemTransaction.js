import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { numberWithDot } from "../utils/StringHelper";

const ItemTransaction = ({ transaction }) => {
  const statusBadge = () => {
    switch (transaction.status) {
      case "Sukses":
        return (
          <span className="badge text-bg-success">{transaction.status}</span>
        );
      case "Di Proses":
        return (
          <span className="badge text-bg-primary">{transaction.status}</span>
        );
      case "Pembayaran":
        return (
          <span className="badge text-bg-warning">{transaction.status}</span>
        );
      default:
        break;
    }
  };

  const messsage = () => {
    switch (transaction.status) {
      case "Sukses":
        return "Pesanan anda sudah selesai";
      case "Di Proses":
        return "Pesanan sedang di proses, Mohon menunggu pesanan anda";
      case "Pembayaran":
        return "Silahkan melakukan pembayaran di kasir";
      default:
        break;
    }
  };

  return (
    <>
      <div className="container mb-4 p-4 border rounded-2 bg-dark">
        <div className="row p-0 m-0">
          <table className="table-dark table-borderless text-white">
            <thead>
              <tr>
                <th scope="col">No Order</th>
                <th scope="col">Menu</th>
                <th scope="col">Price</th>
                <th scope="col">Buyer</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className="text-light-secondary">
              <tr>
                <th scope="row">{transaction.id}</th>
                <td>
                  {transaction.order_product.length > 0 &&
                    transaction.order_product.map((product) => {
                      return (
                        <>
                          {product.name} x {product.quantity} <br />
                        </>
                      );
                    })}
                </td>
                <td>Rp {numberWithDot(transaction.total)}</td>
                <td>{transaction.username}</td>
                <td> {statusBadge()}</td>
                <td>{transaction.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="pt-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="l"
            style={{ color: "#0fa404" }}
          />
          <span className="text-white ms-3 fw-light">{messsage()}</span>
        </h4>
      </div>
    </>
  );
};

export default ItemTransaction;
