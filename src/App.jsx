import 'bootstrap/dist/css/bootstrap.min.css'; import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
  <>
      <NavBar />
      {/* <RegisterPage />*/}
      <LoginPage />
      {/* <Header />*/}
      {/*<Productos />*/}
      <Footer />
  </>
  );
}

export default App;
