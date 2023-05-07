import styled from 'styled-components';
import myImage from '../../../assets/images/m.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-low: row nowrap;
  width: 100%;
  height: 60%;
  padding-top: 80px;
  padding-bottom: 30px;
  background-color: #0b66c2;
  position: relative;
`;

export const HeadWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  margin-top: -60px;
`;
export const LeftContent = styled.div`
  flex: 1;
  margin-right: 5%;
  padding-top: 2%;
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
  position: absolute;
  margin-top: 0px;
  margin-left: 35%;
`;

export const LI = styled.li`
  margin-bottom: 20px;
  color: #88a9d1;
`;
export const RightContent = styled.div`
  flex: 1;
  width: 40%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 2%;
`;
export const Image = styled.div`
  background-image: url(${myImage});
  height: 300px;
  width: 80%;
  border-radius: 7px;
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
`;
