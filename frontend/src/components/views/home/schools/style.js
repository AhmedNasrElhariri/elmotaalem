import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  margin: ${props => props.margin};
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const Head = styled.div`
  margin: 66px auto;
  font-size: 39px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #0a66c2;
`;
export const Check = styled.div`
  width: 427px;
  height: 443px;
  margin-right: ${props => props.mr};
  border-radius: 5px;
  background-color: #64a1ea;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const CheckContent = styled.div`
  align-self: stretch;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;
export const CheckContentContainer = styled.div`
  padding: 173px 79.6px 172px 81px;
`;
export const School = styled.div`
  width: 266.4px;
  margin-right: ${props => props.mr};
  background-color: #eef6ff;
  @media only screen and (max-width: 768px) {
    width: 45%;
    margin: 16px auto;
    background-color: transparent;
  }
`;
export const IconCheck = styled.img`
  float: right;
  width: 57px;
  height: 44px;
  @media only screen and (max-width: 768px) {
  }
`;
export const Image = styled.img`
  width: 266px;
  height: 214px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;
export const SchoolTitle = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  color: #0a66c2;
  margin: 30px 16px 20px 16px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;
export const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #375188;
  margin: 0px 16px 20px 16px;
  @media only screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;
export const ReadMore = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #0a66c2;
  margin: 0px 147px 16px 16px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
