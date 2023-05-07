import styled from 'styled-components';
import myImage from '../../../../assets/images/we-offer/1.png';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 5%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    margin-left: 0;
    margin-top: 0px;
  }
`;
export const DivForLeftContent = styled.div`
  width: 500px;
  text-align: center;
  margin-left: 15%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const ImageForLeftDiv = styled.div`
  background-image: url(${myImage});
  height: 500px;
  width: 80%;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const DivForRightContent = styled.div`
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const RightContent = styled.div`
  flex: 1.5;
  padding: 20px;
`;

export const Icon = styled.img``;

export const HeadingForRightCont = styled.h1`
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.colors.color200};
  text-align: left;
  padding: 10px;
  margin-left: 5%;
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;

export const InsideWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  text-align: left;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftParagraphDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 91px 41.4px 29px 33.9px;
  padding: 0;
  @media only screen and (max-width: 768px) {
    width: 45%;
    margin: 10px auto;
  }
`;
export const RightParagraphDiv = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 91px 0 29px 41.4px;
  padding: 0;
`;
export const LeftParagraph = styled.div`
  align-self: stretch;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.color300};
  @media only screen and (max-width: 768px) {
  }
`;
export const RightParagraph = styled.div`
  align-self: stretch;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.color300};
`;
export const PragraphsHead = styled.h2`
  height: 30px;
  align-self: stretch;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.color300};
`;
export const Paragraphs = styled.p`
  height: 72px;
  align-self: stretch;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.color300};
`;

export const sectionTwoWrapper = styled.div`
  width: 853px;
  height: 434px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 45px 30%;
  padding: 0;
`;

export const LeftContentSecTwo = styled.div`
  flex: 1;
  padding: 5px;
  margin-left: 20%;
`;

export const RightContentSecTwo = styled.div`
  flex: 1;
  margin-left: 20%;
`;
