import styled from 'styled-components';

export const ShapeBoxStyle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  width: 100%;
  height: 200px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const ShortText = styled.p`
  width: 720px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.tertiary};
  padding: 12px 37px 12px 55px;
  font-size: 22px;
  font-weight: bold;
  text-align: right;
  margin-top: -39px;
  height: 75px;
  line-height: 75px;
`;
