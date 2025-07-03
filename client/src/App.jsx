import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import PublicRoute from "./components/publicRoute/PublicRoute";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFound from "./pages/notFount/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
