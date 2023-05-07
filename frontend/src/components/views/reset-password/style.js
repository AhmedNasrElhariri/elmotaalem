import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 60%;
  background-color: white;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    height: auto;
    flex-direction: column;
    padding: 0;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  margin-left: 10%;
  order: 1;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    order: 2;
  }
`;
export const RightContent = styled.div`
  flex: 1;
  padding-left: 10px;
  order: 2;
  @media only screen and (max-width: 768px) {
    order: 1;
  }
`;
export const Form = styled.form`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
`;
export const Head = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.dark};
  margin-left: 17%;
`;
export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  margin-left: 17%;
  color: #415a9c;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 5px auto;
    text-align: center;
    font-size: 20px;
  }
`;
export const Image = styled.img`
  width: 350px;
  height: 300px;
  margin: 10px;
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;
export const LinksBox = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
  }
`;
