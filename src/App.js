import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route
          path="/order"
          element={
            localStorage.getItem("id-customer") === null ? (
              <Navigate to="/login" />
            ) : (
              <OrderPage />
            )
          }
        />
        <Route
          path="/transaction"
          element={
            localStorage.getItem("id-customer") === null ? (
              <Navigate to="/login" />
            ) : (
              <TransactionPage />
            )
          }
        />
        {/* <Route path="/order" element={<OrderPage />} /> */}
        {/* <Route path="/transaction" element={<TransactionPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
