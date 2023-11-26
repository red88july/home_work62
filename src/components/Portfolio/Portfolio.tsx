import {useState} from 'react';
import MovieForm from '../MovieForm/MovieForm.tsx';
import MovieImage from '../../uploads/img-movieForm.jpg';
import GeoImage from '../../uploads/img-geoPic.jpg';
import '../../styles.css';
import ScrollBox from '../ScrollBox/ScrollBox.tsx';
import Line from '../../images/linedot.png';

const Portfolio = () => {
  const [showFirstTask, setFirstTask] = useState(false);
  const [showSecondTask, setSecondTask] = useState(false);
  const visabilityFirst = () => {
    setFirstTask((prevState) => !prevState);
  };

  const visabilitySecond = () => {
    setSecondTask((prevState) => !prevState);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="mt-5">Портфолио</h2>
        <img src={Line} alt="Arrow line"/>
      </div>
      <div className="d-flex align-items-center flex-column mt-5">
        <div className="d-flex gap-5 align-items-center">
          <div className="btn-port d-flex flex-column gap-3 justify-content-center align-items-center border border-success-subtle rounded-4 border-2" onClick={() => visabilityFirst()}>
            <img src={MovieImage} alt="Banner Movie form" className="click-portoflo rounded-4"/>
            <p className="fs-5" style={{width: '417px'}}>Приложение для отслеживания новинок кинофилмов</p>
          </div>
          <div className="btn-port d-flex flex-column gap-3 justify-content-center align-items-center border border-success-subtle rounded-4 border-2" onClick={() => visabilitySecond()}>
            <img src={GeoImage} alt="Banner Movie form" className="click-portoflo rounded-4"/>
            <p className="fs-5" style={{width: '417px'}}>Приложение для отображения данных о стране</p>
          </div>
        </div>
        <div className="w-100 d-flex g-2 justify-content-center align-items-center">
          <div className="border border-black p-4 mt-2" style={{ visibility: showFirstTask ? 'visible' : 'hidden' }}>
            <MovieForm onSubmit={() => {}} />
          </div>
          <div style={{ visibility: showSecondTask ? 'visible' : 'hidden' }}>
            <ScrollBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;