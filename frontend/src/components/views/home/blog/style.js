import styled from 'styled-components';

export const BlogContainer = styled.div`
  width: 100%;
  min-height: 776px;
  text-align: center;
`;
export const Title = styled.h3`
  font-size: 53px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin: 20px 0;
`;
export const ShortText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0;
  justify-content: space-around;
  padding: 32px 50px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin: 20px auto;
  }
`;
