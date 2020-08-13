import React, { useEffect } from 'react';

import { FiSearch, FiSun, FiCloudRain } from 'react-icons/fi';
import Geonames from 'geonames.js';

import {
  Conatiner,
  Header,
  HeaderContent,
  Content,
  Search,
  InputContainer,
  SearchInfo,
  LocationData,
  TemperatureContainer,
  Temperature,
  TemperatureData,
  DaysWeekContainer,
  Day,
} from './styles';

const Dashboard: React.FC = () => {
  const geonames = new Geonames({
    username: 'leo.nezes',
    lan: 'en',
    encoding: 'JSON',
  });

  useEffect(() => {
    async function load(): Promise<void> {
      const cont = await geonames.search({ q: 'CONT' });
      console.log(cont);
    }

    load();
  }, [geonames]);

  return (
    <Conatiner>
      <Header>
        <HeaderContent>
          <h1>Weather Info</h1>
        </HeaderContent>
      </Header>

      <Content>
        <Search>
          <InputContainer>
            <FiSearch />

            <input name="search" placeholder="Pesquise a cidade" />
          </InputContainer>
        </Search>
        <SearchInfo>
          <LocationData>
            <span>Ananindeua, State of Pará</span>
            <span>Thursday 12:00</span>
            <span>Sunny</span>
          </LocationData>

          <TemperatureContainer>
            <Temperature>
              <FiSun />
              <span>33 ºC</span>
            </Temperature>

            <TemperatureData>
              <span>Preciptation: 0%</span>
              <span>Humidity: 54%</span>
              <span>Wind: 14 Km/h</span>
            </TemperatureData>
          </TemperatureContainer>

          <DaysWeekContainer>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
            <Day>
              <span>Wed</span>
              <FiCloudRain />
              <div>
                <span>33°</span>
                <span>23°</span>
              </div>
            </Day>
          </DaysWeekContainer>
        </SearchInfo>
      </Content>
    </Conatiner>
  );
};

export default Dashboard;
