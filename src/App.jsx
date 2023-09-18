import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "./contexts/AppContext";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import LoginUser from "./pages/LoginUser";
import SignupUser from "./pages/SignupUser";
import ProductDetails from "./components/ProductDetails";
import Featured from "./pages/Featured";
import FeaturedDetails from "./components/FeaturedDetails";
import Preorder from "./components/Preorder";
import UserOrders from "./pages/UserOrders";
import Modal from "./components/Modal";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserAccount from "./pages/user-account/UserAccount";
import UpdateAccount from "./pages/user-account/UpdateAccount";
import UpdatePassword from "./pages/user-account/UpdatePassword";

export default function App() {
  const { showModal1, setShowModal1 } = useAppContext();

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal showModal={showModal1} setShowModal={setShowModal1}>
        <ForgotPassword setShowModal1={setShowModal1} />
      </Modal>
      <Header />
      <Preorder />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route
          path="login-user"
          element={<LoginUser setShowModal1={setShowModal1} />}
        />
        <Route path="signup-user" element={<SignupUser />} />
        <Route path="product/:droneId" element={<ProductDetails />} />
        <Route path="featured" element={<Featured />} />
        <Route path="featured/:featuredId" element={<FeaturedDetails />} />
        <Route path="user-orders" element={<UserOrders />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route
          path="user-account"
          element={
            <UserAccount>
              <UpdateAccount />
              <UpdatePassword />
            </UserAccount>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
