import './App.css';
import './components/ComponentText/ComponentText.css';
import './components/ComponentHeader/ComponentHeader.css';
import { NavBar } from './components/NavBar/NavBar';
import { ComponentButton } from './components/ComponentButton/ComponentButton';
import { ComponentText } from './components/ComponentText/ComponentText';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
	
    <div className="App">	
      <NavBar/>

		<div className='size60'>
		<ComponentHeader headerTextName="Cервис по поиску публикаций о компании по его ИНН"/>
		</div>

		<div className="size20 colorWhite background">
      <ComponentText  textName="Комплексный анализ публикаций, получение данных в формате PDF на электронную почту."/>
		</div>

      <ComponentButton variant='contained'>Я Кнопка </ComponentButton>
    </div>

  );
}

export default App;
