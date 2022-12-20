import "./App.css";
import { useEffect } from "react";
import { getALLProducts } from "./JS/actions/productActions";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { getCurrent } from "./JS/actions/userActions";
import PrivateRoute from "./components/PrivateRoute";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import CampList from "./components/Camping/CampList";
import AddCamping from "./components/AddCamping/AddCamping";
import { getALLCamps } from "./JS/actions/campActions";
import EditCamp from "./components/EditCamp/EditCamp";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLProducts());
    
    dispatch(getCurrent());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route
          path="/Camping"
          element={
            <div>
              <CampList />
              {localStorage.getItem("token") && (
                <Link to="/addCamp">
                  <button>ADD CAMPING</button>
                </Link>
              )}
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <ProductList />
              {localStorage.getItem("token") && (
                <Link to="/addProduct">
                  <button>ADD PRODUCT</button>
                </Link>
              )}
            </div>
          }
        />
        <Route
          path="/Shop"
          element={
            <div>
              <ProductList />
              {localStorage.getItem("token") && (
                <Link to="/addProduct">
                  <button>ADD PRODUCT</button>
                </Link>
              )}
            </div>
          }
        />
        <Route
          path="/shopping"
          element={
            <div>
              <PrivateRoute>
                <ShoppingCard />
              </PrivateRoute>
            </div>
          }
        />
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              {" "}
              <AddProduct />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/addCamp"
          element={
            <PrivateRoute>
              {" "}
              <AddCamping />{" "}
            </PrivateRoute>
          }
        />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/editCamp/:id" element={<EditCamp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registre" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
