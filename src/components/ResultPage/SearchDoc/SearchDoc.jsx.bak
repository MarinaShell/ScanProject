import React from "react";
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentSearchDoc from "./ComponentSearchDoc/ComponentSearchDoc";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import { Colors } from "../../../theme/Colors/Colors";
import image1 from "./image1.svg";
import image2 from "./image2.svg";
import "./SearchDoc.css";

const SearchDoc = () => {
  return (
    <CustomContainer>
      <div>
        <ComponentHeaderText
          style={{
            fontSize: "45px",
            fontWeight: "500",
            lineHeight: "54px",
            marginTop: "20px",
            marginBottom: "60px",
            textAlign: "left",
          }}
        >
          СПИСОК ДОКУМЕНТОВ
        </ComponentHeaderText>
      </div>
      <div className="cards">
        <ComponentSearchDoc
          textDate="13.09.2021"
          textSource="Комсомольская правда KP.RU"
          textHeader="Скиллфэктори - лучшая онлайн-школа для будущих айтишников"
          textType="Технические новости"
          text="SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами."
          textNumWord="2 543 слова"
          image={image1}
        />
        <ComponentSearchDoc
          textDate="15.10.2021"
          textSource="VC.RU"
          textHeader="Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций"
          textType="Технические новости"
          text="Кто такой Data Scientist и чем он занимается?
                    Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.
                    В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу."
          textNumWord="3 233 слова"
          image={image2}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <CustomButton variant="blue">Показать больше</CustomButton>
      </div>
    </CustomContainer>
  );
};

export default SearchDoc;
