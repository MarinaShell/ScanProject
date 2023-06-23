import './App.css';
import { fontSize } from '@mui/system'
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
import  ComponentText  from './components/ComponentText/ComponentText';
import  ComponentHeader  from './components/ComponentHeader/ComponentHeader';
import  ComponentMainPageMedia  from './components/ComponentMainPageMedia/ComponentMainPageMedia';
import ComponentAuthMedia from './components/ComponentAuthMedia/ComponentAuthMedia';


import MyImage from './images/Group14.svg';

import { CustomButton } from './components/CustomComponents/CustomButton/CustomButton';

function App() {
  return (
    <div className="App">	
	 	<ComponentAuthMedia />
      <NavBar />
      <ComponentHeader style={{fontSize:"60px"}}> Cервис по поиску публикаций о компании по его ИНН
</ComponentHeader>
    <ComponentText  style={{fontSize:"20px"}}></ComponentText>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.<ComponentText/>
		<ComponentMainPageMedia />
		
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
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
