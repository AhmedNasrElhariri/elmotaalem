import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 230px 143.7px 0px 0px;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 20px auto;
    width: 80%;
  }
`;
export const Content = styled.div`
  width: 444px;
  margin: 0px 31px 0px 180px;
  order: 1;
  @media only screen and (max-width: 768px) {
    order: 2;
    width: 100%;
    margin: 16px auto;
    display: flex;
    flex-direction: column;
  }
`;
export const ErrorContent = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #415a9c;
  margin: 93px 0px 32px 0px;
  @media only screen and (max-width: 768px) {
    order: 2;
    margin: 10px auto;
  }
`;
export const ErrorCode = styled.div`
  margin: 0px 0px 8px 0;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  color: #375188;
  @media only screen and (max-width: 768px) {
    order: 1;
  }
`;
export const ErrorMessage = styled.div`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #6d7580;
  margin: 0px 0px 32px 0;
  @media only screen and (max-width: 768px) {
    order: 3;
  }
`;
export const Image = styled.img`
  width: 481.3px;
  height: 422.5px;
  border-radius: 20px;
  order: 2;
  @media only screen and (max-width: 768px) {
    order: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: unset;
  }
`;
