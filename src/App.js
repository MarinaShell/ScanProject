import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { AuthPage } from './components/AuthPage/AuthPage';
import { SearchPage } from './components/SearchPage/SearchPage';
import { ResultPage } from './components/ResultPage/ResultPage';
import { Footer } from './components/Footer/Footer';
import { ComponentText } from './components/ComponentText/ComponentText';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';
import { ComponentImage } from './components/ComponentImage/ComponentImage';
import MyImage from './images/Group14.png';

import { CustomButton } from './components/CustomComponents/CustomButton/CustomButton';

function App() {
  return (
    <div className="App">	
	 	
      <NavBar />
      <ComponentHeader style={{fontSize:"60px", color: "black"}} headerTextName="Cервис по поиску публикаций о компании по его ИНН"/>	
      <ComponentText style={{fontSize:"20px", color: "black"}} textName="Комплексный анализ публикаций, получение данных в формате PDF на электронную почту."/>
		{/* <ComponentImage img src = {MyImage} style = {{height:560, width:1307}} /> */}
		<img src={MyImage}  />
      {/*<CustomButton variant='blue' >Читать в источнике</CustomButton>*/}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<AuthPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='result' element={<ResultPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
