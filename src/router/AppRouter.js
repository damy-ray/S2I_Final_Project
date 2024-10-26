import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "../Views/HomePage";
import MethanePage from "../Views/Metano";
import CO2Page from "../Views/CO2";
import NO2Page from "../Views/NO2";
import GhiaccioPolarePage from "../Views/GhiaccioPolare";
import TemperaturePage from "../Views/Temperature";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Footer from "../Components/Footer";
import Login from "Views/Login";
import Register from "Views/Register";
//import PageNotFound from "Components/core/PageNotFound";
const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  const PrivateRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
       {currentUser && <Navbar />}
      <div className="h-full">
        <Routes>
          {currentUser && <Route path="/" element={<HomePage />} />}
          {!currentUser && <Route path="/" element={<Login />} ></Route>}
          {!currentUser && <Route path="/register" element={<Register />} ></Route>}
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path={`${('/login' || '/register') ? ('/login' || '/register')  : '*' }`} element={<PageNotFound />} /> */}

          {/* Private routes */}
          <Route
            path="/methane"
            element={
              <PrivateRoute>
                <MethanePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/co2"
            element={
              <PrivateRoute>
                <CO2Page />
              </PrivateRoute>
            }
          />
          <Route
            path="/no2"
            element={
              <PrivateRoute>
                <NO2Page />
              </PrivateRoute>
            }
          />
          <Route
            path="/ghiaccio-polare"
            element={
              <PrivateRoute>
                <GhiaccioPolarePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/temperature"
            element={
              <PrivateRoute>
                <TemperaturePage />
              </PrivateRoute>
            }
          />
        </Routes>
      <ShowFooterOnHomePage />
      </div>
    </Router>
  );
};
const ShowFooterOnHomePage = () => {
  const location = useLocation();
  return location.pathname === "/" ? <Footer /> : null;
};

export default AppRouter;

