import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import { CustomButton } from './CustomComponents/CustomButton/CustomButton'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Header />

      <CustomButton variant='blue'>Запросить данные</CustomButton>
    
      <Footer />
    </div>
  );
}

export default App;
