import React from 'react';
import Line from '../../images/linedot.png';
import '../../styles.css';
import CcnaExploration from '../../uploads/ciscoExploration.png';
import InTech2019 from '../../uploads/inTech2019.png';
import Exhibition from '../../uploads/Exihibition2018.png';
import GreeLightRecharge from '../../uploads/greenLightITrecharge.png';

const Events: React.FC = () => {
  return (
    <>
      <div className=" container-fluid text-center mt-3">
        <h2 className="mt-5">События</h2>
        <img src={Line} alt="Arrow line"/>
        <div className="container-description">
          <p className="mt-5 text-start"
             style={{textIndent: '10px', fontSize: '18px', width: '60vw'}}>
            Как говорил <cite>Аристотель</cite>, <q>Познание начинается с удивления</q>, так и я познаю новое, для меня это
            различные мероприятия, художественного характера, будь то музыкальные фестивали, выставки исскуства, но больше всего мне
            нравятся мероприятия посвяшенные новым технологиям. Помимо посящений мероприятий, также мо мере возможности посещаю семинары и записываюсь
            на курсы вызывающие мой интерес.
          </p>
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
      </div>

    </>
  );
};

export default Events;