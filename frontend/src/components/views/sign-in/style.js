import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  height: 642px;
  margin: 20px 400px 330px;
  border-radius: 8px;
  box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    margin: 0px auto;
    height: 100vh;
    box-shadow: none;
    width: 100%;
    text-align: center;
    transform: translateY(25%);
  }
`;

export const FormStyle = styled.div`
  width: 600px;
  height: 642px;
  position: absolute;
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    height: 100%;
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
`;

export const Paragraph = styled.p`
  width: 483px;
  height: 27px;
  flex-grow: 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.5;
  letter-spacing: normal;
  text-align: center;
  margin-left: 40px;
  color: #415a9c;
`;

export const SighUpFacebook = styled.button`
  width: 350px;
  height: 45px;
  flex-grow: 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  margin-left: 105px;
  margin-top: 20px;
  background: none;
  border: solid 1px #dadee3;
  border-radius: 3px;
  color: ${props => props.theme.colors.color100};
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    padding: 0 16px;
  }
`;

export const DivLineStyle = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    margin: 20px 0;
    display: none;
  }
`;
export const LeftLine = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 150px;
  margin-left: 105px;
  margin-top: 10px;
  position: absolute;
  @media only screen and (max-width: 768px) {
  }
`;
export const RightLine = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 150px;
  margin-top: 10px;
  margin-left: 300px;
  position: absolute;
  @media only screen and (max-width: 768px) {
    width: 20%;
    right: 25%;
  }
`;

export const OrSapn = styled.span`
  width: 26px;
  height: 7px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.theme.colors.color100};
  margin-left: 265px;
  margin-top: 3px;
  position: absolute;
  @media only screen and (max-width: 768px) {
  }
`;

export const RegisterSapn = styled.span`
  width: 26px;
  height: 7px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.theme.colors.color100};
  margin-left: 240px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    display: block;
    width: 100%;
  }
`;

export const RegisterLink = styled.a`
  font-weight: bold;
  color: ${props => props.theme.colors.color100};
  text-decoration: underline;
`;
