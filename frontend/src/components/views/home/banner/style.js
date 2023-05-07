import styled from 'styled-components';
import Img2 from '../../../../assets/images/banner/1.png';

export const BannerBoxStyle = styled.div`
  position: relative;
  background-color: #64a1ea1a;
  padding: 21px 84px 0 84px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 0;
    background-color: transparent;
  }
`;
export const LeftBox = styled.div`
  width: 465px;
  order: 1;
  @media only screen and (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;
export const RightBox = styled.div`
  width: 570px;
  margin: 0 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  order: 2;
  @media only screen and (max-width: 768px) {
    background-image: url(${Img2});
    min-height: 445px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 8px;
    width: 100%;
    margin: 0;
    order: 1;
  }
`;
export const ImgGroup = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const BottomBox = styled.div`
  background-color: ${props => props.theme.colors.primaryLight};
  width: 100%;
`;

export const Image = styled.img`
  margin: ${props => props.margin};
  object-fit: cover;
  background-position: center;
`;

export const BannerTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 30px;
  }
`;
export const BannerInfo = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
export const BannerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: ${props => props.theme.colors.dark};
  margin: 0;
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 30px 0;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin: 15px auto auto 5px;
  }
`;
export const Button = styled.button`
  background-color: ${props => props.color};
  width: 149px;
  height: 40px;
  margin: 0 20px 0 0;
  padding: 11px 16px 13px;
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.colors.white};
  text-transform: capitalize;
`;
