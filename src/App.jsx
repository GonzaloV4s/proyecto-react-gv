
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Productos />
      <Footer />

    </>
  );
}

export default App;