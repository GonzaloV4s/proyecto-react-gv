import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Page/Home";
import Cart from "./Page/Cart";
import PizzaDetail from "./Page/PizzaDetail";

import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <NavBar />

      <main className="flex-fill" style={{ paddingTop: "56px" }}>
        <Routes>

          {/* PUBLICAS */}
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />

          {/* SOLO NO LOGUEADOS */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* SOLO LOGUEADOS */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
