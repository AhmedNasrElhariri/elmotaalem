import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  height: 450px;
  margin: 20px 400px 330px;
  border-radius: 8px;
  box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    margin: 0px auto;
    width: 100%;
    height: 100vh;
  }
`;

export const FormStyle = styled.div`
  width: 600px;
  height: 450px;
  position: absolute;
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    height: 100%;
    position: static;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Heading = styled.h2`
  width: 483px;
  height: 40px;
  flex-grow: 0;
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.5;
  margin-left: 40px;
  letter-spacing: normal;
  text-align: center;
  color: #193676;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    text-align: center;
    height: auto;
  }
`;

export const Paragraph = styled.p`
  width: 400px;
  height: 20px;
  flex-grow: 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  margin-top: 40px;
  margin-left: 80px;
  margin-bottom: 70px;
  color: #415a9c;
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    margin: 40px auto;
    width: 75%;
    height: auto;
  }
`;
