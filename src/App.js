import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { ComponentText } from './components/ComponentText/ComponentText';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
	
    <div className="App">	
      <NavBar/>

      <ComponentHeader style={{fontSize:"60px"}} headerTextName="Cервис по поиску публикаций о компании по его ИНН"/>	
      <ComponentText style={{fontSize:"20px"}} textName="Комплексный анализ публикаций, получение данных в формате PDF на электронную почту."/>

      <ComponentButton variant='contained'>Я Кнопка </ComponentButton>
    </div>

  );
}

export default App;
