import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

function App() {
  
  return (
    <div>
        <AuthContextProvider>
          <AppRouter />
          <ToastContainer />
        </AuthContextProvider>
      </div>
  );
}

export default App;
