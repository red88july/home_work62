import React from 'react';
import MyPhoto from '../../uploads/myphoto.jpg';

const About:React.FC = () => {
  return (
    <div>

      <div>
        <h3>Михаил Сергеев</h3>
        <p>Немного о себе, родился и вырос в Кыргызстане, г.Бишкек.
          В юношестве, увлекался компьютерными видео-играми, также любил и люблюб до сих пор двухколёсную технику, также временами люблюи позаниматся с гантелями/штангой так для себя и не для рекордов.
          Не так давно появилось новое увлечение - это работа с деревом. Люблю готовить, самые любимые блюда - это блюда приготовленные с мясом.
          Увечение видео-играми и компьютерами привело, меня к тому, что я поступил в 2006 году и закончил в 2012, КГТУ им. Раззакова по специальности Информационные Системы в Экономике на выпуске, темой моей,
          дипломной работы было "АРМ инженера з.Кыргызмедтехника", для написания испольховал 1С.
          Моя карьера, после окнчания ВУЗа, пошла не по специализации, которой обучали, больше ушла в Сети и сетевые технологии. Это была работ "Системным Администратором", "Инженером технической поддержки", "Инженером Мониторинга сети и сервисной поддержки"</p>
      </div>
      <div>
        <img src={MyPhoto} alt="My Photo" />
      </div>

      <div>

      </div>

    </div>
  );
};

export default About;