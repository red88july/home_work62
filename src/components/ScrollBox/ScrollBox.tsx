import React, {useEffect, useState} from 'react';
import {Countries} from '../../types';
import '../../styles.css';

const ScrollBox: React.FC = () => {
  const [listCountry, setCountryList] = useState<Countries[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Countries | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all?fields=alpha3Code,name');
        if (response.ok) {
          const dataFromAPI = await response.json();
          setCountryList(dataFromAPI);
        }
      } catch (e) {
        console.log(`Fetching data is error`, e);
      }
    };
    void fetchData();
  }, []);

  const fetchDataCode = async (alpha3Code: string) => {
    try {
      const response = await fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
      if (response.ok) {
        const dataFromAPIAlpha = await response.json();
        setSelectedCountry(dataFromAPIAlpha);
      }
    } catch (e) {
      console.log(`Fetching data by ${alpha3Code} is error`, e);
    }
  };

  const handleCountryByClick = async (e: React.MouseEvent, alpha3Code: string) => {
    e.preventDefault();
    await fetchDataCode(alpha3Code);
  };

  return (
    <>
      <div className="d-flex style-country gap-3 p-2 mt-5 ms-3 me-3 border border-primary-subtle border-4 rounded-3">
        <div className="overflow-scroll overflow-x-hidden p-3" style={{maxWidth: '450px', maxHeight: '60vh'}}>
          <ol className="m-0 p-0" style={{width: '350px', listStyle: 'none'}}>
            {listCountry.map((item) => (
              <li key={item.name}>
                <a href="" onClick={(e) => handleCountryByClick(e, item.alpha3Code)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <div className="mt-4 ms-4">
            {selectedCountry && (
              <div className="d-flex flex-column gap-5 mb-5">
                <div className="d-flex gap-4">
                  <div className="d-flex flex-column">
                    <h2 className="mb-3">{selectedCountry.name}</h2>
                    <div>
                      <b>Capital</b>: {selectedCountry.capital}
                    </div>
                    <div>
                      <b>Population</b>: {selectedCountry.population}
                    </div>
                  </div>
                  <div>
                    <img src={selectedCountry.flag}
                         alt={selectedCountry.name}
                         style={{maxWidth: '150px', maxHeight: '100px'}}/>
                  </div>
                </div>
                <div>
                  <b>Borders with: </b>
                  <ul>
                    {Array.isArray(selectedCountry.borders) ? (
                      selectedCountry.borders.map((alpha3Code) => (
                        <li key={alpha3Code}>{alpha3Code}</li>
                      ))
                    ) : (
                      <li>{selectedCountry.borders}</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollBox;
