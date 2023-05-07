import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 120px;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const SubContainer = styled.div`
  width: 641px;
  height: 488px;
  background-color: ${props => props.bgColor};
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;
export const Title = styled.div`
  font-family: Montserrat;
  font-size: 39px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: center;
  color: ${props => props.color};
  margin-top: 120px;
`;
export const Content = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.color};
  margin: ${props => props.margin};
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: 20px auto;
  }
`;
