import styled from 'styled-components';

export const TestTitleContainer = styled.div`
  display: flex;
  margin: 66px 85px;
  @media only screen and (max-width: 768px) {
    margin: 10px;
    padding: 30px 10px;
  }
`;
export const TestTitle = styled.div`
  background-color: #0a66c2;
  @media only screen and (max-width: 768px) {
    border-radius: 8px;
  }
`;
export const Title = styled.div`
  font-family: Roboto;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.3;
  color: #ffffff;
  margin: 84px 41px 20px 44px;
`;
export const Content = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin: 0px 44px 30px 44px;
  @media only screen and (max-width: 768px) {
    margin: 32px;
  }
`;
export const Button = styled.div`
  width: 211px;
  background-color: #f0cc26;
  padding: 12px 0;
  margin: 16px auto;
  text-align: center;
  text-transform: capitalize;
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
export const Image = styled.img`
  width: 568.5px;
  height: 450px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-top: 66px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    padding: 0 10px;
    flex-wrap: wrap;
  }
`;
export const Definition = styled.div`
  width: 783px;
  margin: 0px 0px 0px 127px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
export const DefinitionContent = styled.div`
  margin: ${props => props.margin};
  font-family: Roboto;
  font-size: ${props => props.fs};
  font-weight: ${props => props.fontWeight};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.color};
  @media only screen and (max-width: 768px) {
    margin: 10px;
    width: 90%;
  }
`;
export const Scores = styled.div`
  width: 255px;
  margin: 0px 85px 469px 0px;
  background-color: #eef6ff;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    display: none;
  }
`;
export const ScoreItems = styled.div`
  display: flex;
  justify-content: space-around;
`;
