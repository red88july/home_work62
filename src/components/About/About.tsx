import React from 'react';
import MyPhoto from '../../uploads/myphoto.png';
import CcnaExploration from '../../uploads/ciscoExploration.png';
import InTech2019 from '../../uploads/inTech2019.png';
import Exhibition from '../../uploads/Exihibition2018.png';
import GreeLightRecharge from '../../uploads/greenLightITrecharge.png';
import Line from '../../images/linedot.png';
import '../../styles.css';

const About: React.FC = () => {
  return (
    <>
      <div className="box-style container-fluid">
        <div className="d-flex align-items-center mt-5 ms-3 me-3 mb-5">
          <div className="ms-4 me-2">
            <h4><i>Обо Мне</i></h4>
            <p style={{textIndent: '20px', fontSize: '18px'}}>
              Здравствуйте! Меня зовут <i>Михаил Сергеев</i>, родился и вырос в Кыргызстане, г.Бишкек.
              В юношестве, увлекался компьютерными видео-играми, также любил и люблю до сих пор двухколёсную технику,
              также временами люблюи позаниматся с гантелями/штангой так для себя и не для рекордов.
              Не так давно появилось новое увлечение - это работа с деревом. Люблю готовить, самые любимые блюда - это
              блюда приготовленные с мясом.
            </p>
            <p style={{textIndent: '20px', fontSize: '18px'}}>
              Увечение видео-играми и компьютерами привело, меня к тому, что я поступил в 2006 году и закончил в 2012,
              КГТУ им. Раззакова по специальности Информационные Системы в Экономике на выпуске, темой моей,
              дипломной работы было "АРМ инженера з.Кыргызмедтехника", для написания испольховал 1С.
            </p>
            <p style={{textIndent: '20px', fontSize: '18px'}}>
              Моя карьера, после окнчания ВУЗа, пошла не по специализации, которой обучали, больше ушла в Сети и сетевые
              технологии. Это была работ "Системным Администратором", "Инженером технической поддержки", "Инженером
              Мониторинга сети
              и сервисной поддержки"
            </p>
          </div>
          <div className="p-2">
            <img src={MyPhoto} alt="My Photo"
                 style={{width: '400px', height: '400px'}}
                 className="rounded-4"/>
          </div>
        </div>
      </div>
      <div className=" container-fluid text-center mt-3">
        <h2 className="m-0">Участие в мероприятиях</h2>
        <img src={Line} alt="Arrow line"/>
      </div>
      <div className="d-flex justify-content-evenly mt-5 container-fluid">
        <div className="card">
          <img src={CcnaExploration} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Торжественная выдача сертификатов о прохождении курсов Cisco CCNA Exploration в
              новом
              кампусе American University of Central Asia.</p>
          </div>
        </div>
        <div className="card" style={{width: '20rem'}}>
          <img src={InTech2019} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Посещение выставки In Tech 2019 от компании Softline, посвещенной новым
              информационным технологиям</p>
          </div>
        </div>
        <div className="card" style={{width: '20rem'}}>
          <img src={Exhibition} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Выставка, World Press Photo 2018, посвященная лучшим фотографиям журналистов со
              всего мира.
              Мероприятие проводилось в новом кампусе American University of Central Asia.</p>
          </div>
        </div>
        <div className="card" style={{width: '20rem'}}>
          <img src={GreeLightRecharge} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Семинар Recharge IT от компании GreenLight, посвященный новым решениям в области
              сетевых технологий</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default About;