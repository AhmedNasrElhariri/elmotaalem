import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  NavbarContainerStyled,
  NavStyled,
  NavItemStyled,
  NavbarBrandStyled,
  CollapseStyled,
  ButtonGroupStyle,
  NavbarTogglerStyle,
  SignUPBtnStyle,
  LogInBtnStyle,
  CloseBtn,
} from './style';
const items = [
  { to: '/job-skills', name: `Job Skills` },
  { to: '/schools', name: 'Schools' },
  { to: '/colleges', name: 'Colleges' },
  { to: '/skill-test', name: 'Skill Test' },
];

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbarCollapse = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbarCollapse = () => {
    setIsOpen(false);
  };
  return (
    <>
      <NavbarContainerStyled>
        <NavbarBrandStyled href="/"></NavbarBrandStyled>

        <CollapseStyled isOpen={isOpen}>
          <NavStyled>
            {items.map(({ to, name }, idx) => (
              <NavItemStyled key={idx} href={to}>
                {name}
              </NavItemStyled>
            ))}
            <CloseBtn onClick={closeNavbarCollapse}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </CloseBtn>
          </NavStyled>
        </CollapseStyled>

        <ButtonGroupStyle>
          <LogInBtnStyle>Log in</LogInBtnStyle>
          <SignUPBtnStyle>Sign up</SignUPBtnStyle>
        </ButtonGroupStyle>

        <NavbarTogglerStyle onClick={toggleNavbarCollapse}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </NavbarTogglerStyle>
      </NavbarContainerStyled>
    </>
  );
};
export default MainNavbar;
