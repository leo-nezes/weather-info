import styled from 'styled-components';

export const Conatiner = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #1e202b;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.section`
  display: flex;
  width: 900px;
  max-height: 700px;
`;

export const InputContainer = styled.div`
  background: #1e202b;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 20px 100px;
  padding: 16px;

  svg {
    width: 20px;
    height: 20px;

    margin-right: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size: 20px;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const SearchInfo = styled.section`
  height: 450px;
  width: 900px;
  padding: 16px;
`;

export const LocationData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 138px;

  span {
    color: #fff;
    font-size: 24px;
  }

  span + span {
    font-size: 16px;
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-around;
`;

export const Temperature = styled.div`
  display: flex;
  margin-left: 16px;

  span {
    font-size: 60px;
    color: #fff;
  }

  svg {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    margin-right: 16px;
    color: #fff;
  }
`;

export const TemperatureData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-size: 20px;
  }
`;

export const DaysWeekContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 16px 30px;
  padding: 16px 100px;
  height: 150px;
  justify-content: space-between;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: 20px;
  }

  svg {
    height: 50px;
    width: 50px;
    margin: 10px 0;
  }
`;
