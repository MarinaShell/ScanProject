import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import { CustomButton } from './components/ComponentButton/ComponentButton'
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { AuthPage } from './components/AuthPage/AuthPage';
import { SearchPage } from './components/SearchPage/SearchPage';
import { ResultPage } from './components/ResultPage/ResultPage';
import { Footer } from './components/Footer/Footer';
import { CustomButton } from './components/CustomComponents/CustomButton/CustomButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/*<CustomButton variant='blue' >Читать в источнике</CustomButton>*/}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<AuthPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='result' element={<ResultPage />} />
      </Routes>
      <CustomButton variant='blue'>Запросить данные</CustomButton>   
      <Footer />
    </div>
  );
}

export default App;
