import styled from 'styled-components';
import myImage from '../../../../assets/images/who-is/1.png';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 60%;
  padding-top: 80px;
  padding-bottom: 30px;
  background-color: ${props => props.theme.colors.color200};
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: transparent;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: -60px;

  @media only screen and (max-width: 768px) {
    margin: 16px auto;
    height: 30px;
    text-align: center;
  }
`;
export const LeftContent = styled.div`
  flex: 1;
  margin-right: 5%;
  padding-top: 2%;
  order: 1;
  @media only screen and (max-width: 768px) {
    order: 2;
    background-color: ${props => props.theme.colors.color200};
    margin: 0;
  }
`;

export const UL = styled.ul`
  list-style-type: none;
  flex-grow: 0;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: right;
  color: white;
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 50px;
    padding: 0;
  }
`;

export const Heading = styled.h1`
  margin-top: 100px;
  font-family: Roboto;
  font-size: 39px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
  margin-top: 0px;
  margin-left: 35%;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    font-size: 28px;
  }
`;

export const LI = styled.li`
  margin-bottom: 20px;
  color: #88a9d1;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const RightContent = styled.div`
  flex: 1;
  width: 40%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 2%;
  order: 2;
  @media only screen and (max-width: 768px) {
    order: 1;
    width: 100%;
    margin: 0;
  }
`;
export const Image = styled.div`
  background-image: url(${myImage});
  height: 300px;
  width: 80%;
  background-size: cover;
  border-radius: 7px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    border-radius: unset;
  }
`;
export const Paragraph = styled.p`
  width: 444px;
  height: 72px;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0 0;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: white;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
