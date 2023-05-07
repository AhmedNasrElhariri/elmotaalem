import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 320px;
  margin: 20px auto;
  @media only screen and (max-width: 768px) {
    width: 45%;
    margin: 20px auto;
  }
`;
export const ImgCard = styled.img`
  width: 100%;
  height: 214px;
  border-radius: 5px;
  object-fit: cover;
`;
export const CardBody = styled.div`
  text-align: left;
  padding: 30px 0;
`;
export const CardTitle = styled.h5``;
export const CardText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: ${props => props.theme.colors.dark};
  margin: 0 0 20px 0;
  line-height: 30px;
`;
export const CardLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
`;
