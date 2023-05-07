import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 60%;
  background-color: ${props => props.theme.colors.color200};
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  margin-left: 20%;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const Head = styled.h2`
  color: white;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 28px;
`;
export const Paragraph = styled.p`
  color: white;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 15px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: white;
  width: 170px;
  height: 40px;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
    width: 100%;
  }
`;
export const Span = styled.span`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.color200};
`;
export const RightContent = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
