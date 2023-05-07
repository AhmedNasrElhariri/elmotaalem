import styled from 'styled-components';
import button from '../../widgets/button';

export const Form = styled.form`
  width: 600px;
  height: 650px;
  margin: 20px 400px 330px;
  border-radius: 8px;
  box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    box-shadow: none;
  }
`;

export const FormStyle = styled.div`
  width: 600px;
  height: 642px;
  position: absolute;
  margin-top: -15px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
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
    margin: 0 auto;
    width: 100%;
    text-align: center;
    height: auto;
  }
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
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    height: auto;
  }
`;

export const DivLineStyle = styled.div`
  position: relative;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const BottomBox = styled.div`
  @media only screen and (max-width: 768px) {
    width: 60%;
    margin: 0 auto;
    text-align: center;
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
`;
export const LoginBtn = styled(button)`
  display: block;
  width: 100%;
`;
