import React, { useEffect, useState } from "react";
import ItemTransaction from "../components/ItemTransaction";
import Navbar from "../components/Navbar";

const TransactionPage = () => {
  const [transaction, setTransaction] = useState([]);

  const fetchTransaction = () => {
    const id = localStorage.getItem("id-customer");
    fetch(`http://127.0.0.1:8000/api/transactions/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTransaction(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <>
      <Navbar />
      {!transaction["success"] && (
        <div
          className="spinner-border text-light position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="container">
        {transaction["success"] && (
          <>
            <h1 className="text-light fs-2 mb-3">History Transactions</h1>
            {transaction["data"].map((transaction) => {
              return <ItemTransaction transaction={transaction} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default TransactionPage;
