import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  padding: 60px 87px 54px 107px;
  border-radius: 4px;
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.16);
  color: #0a66c2;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;
export const ColContainer = styled.div`
  width: ${props => props.widthMd}%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: ${props => props.widthSm}%;
  }
`;
export const FooterBrand = styled.a``;
export const Text = styled.p``;
export const ListStyled = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${props => (props.type === 'inline' ? 'row' : 'column')};
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const ListItem = styled.li`
  margin: 5px 0;
  @media (max-width: 600px) {
    margin: 5px 8px;
  }
`;
