import styled from 'styled-components';
import NavLink from './itemNav';
import LogoImg from '../../../assets/images/logo/logo.png';
import LogoImgFooter from '../../../assets/images/logo/logo_footer.png';
import LogoImgMobile from '../../../assets/images/logo/logo_mobile.png';

export const NavbarContainerStyled = styled.nav`
  height: 88px;
  padding: 35px 113px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 10px 16px;
    height: 60px;
    box-shadow: 0 0 15px 0 gray;
  }
`;
export const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    height: 100%;
  }
`;

export const NavbarBrandStyled = styled.a`
  width: 198px;
  height: 39px;
  background-image: url(${LogoImg});
  @media (max-width: 768px) {
    width: 77px;
    height: 15px;
    background-image: url(${LogoImgMobile});
    position: relative;
  }
`;

export const CollapseStyled = styled.div`
  display: ${props => (props.isOpen ? 'none' : 'block')};
  background-color: ${props => props.theme.colors.white};
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    z-index: 999;
    height: 255px;
    top: 81px;
    left: 0;
    width: 100%;
  }
`;
export const ButtonGroupStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTogglerStyle = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 22px;
    &:focus {
      outline: none;
    }
  }
`;

export const SignUPBtnStyle = styled.button`
  width: 105px;
  line-height: 14px;
  border-radius: 4px;
  height: 32px;
  margin: 6px 0px 6px 20px;
  padding: 7px 16px 9px;
  font-size: 13px;
  background-color: #64a1ea;
  color: #fff;
  border: none;
  @media (max-width: 768px) {
    width: 83px;
    height: 32px;
    padding: 2px 0;
  }
`;

export const LogInBtnStyle = styled.button`
  background-color: transparent;
  color: #3c64b1;
  border: none;
`;
export const CloseBtn = styled.button`
  position: absolute;
  left: 15px;
  top: 15px;
  background-color: transparent;
  border: none;
  color: gray;
  padding: 0;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const NavItemStyled = styled(NavLink)`
  color: darkblue;
  padding: 0 16px;
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
`;
