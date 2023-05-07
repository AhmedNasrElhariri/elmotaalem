import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  FooterContainerStyled,
  ColContainer,
  ListStyled,
  ListItem,
  FooterBrand,
  Text,
} from './style';
import FooterLogo from '../../../assets/images/logo/logo_footer.png';

const Footer = () => {
  return (
    <FooterContainerStyled>
      <ColContainer widthMd={25} widthSm={100}>
        <FooterBrand>
          <img src={FooterLogo} alt="" />
        </FooterBrand>
        <Text>Nostrud aliquip laboris © 2021</Text>
      </ColContainer>
      <ColContainer widthMd={15} widthSm={50}>
        <h6>First Column</h6>

        <ListStyled>
          <ListItem>First link</ListItem>
          <ListItem>Second link</ListItem>
          <ListItem>Third link</ListItem>
          <ListItem>Fourth link</ListItem>
        </ListStyled>
      </ColContainer>
      <ColContainer widthMd={15} widthSm={50}>
        <h6>First Column</h6>

        <ListStyled>
          <ListItem>First link</ListItem>
          <ListItem>Second link</ListItem>
          <ListItem>Third link</ListItem>
          <ListItem>Fourth link</ListItem>
        </ListStyled>
      </ColContainer>
      <ColContainer widthMd={15} widthSm={50}>
        <h6>First Column</h6>

        <ListStyled>
          <ListItem>First link</ListItem>
          <ListItem>Second link</ListItem>
          <ListItem>Third link</ListItem>
          <ListItem>Fourth link</ListItem>
        </ListStyled>
      </ColContainer>
      <ColContainer widthMd={30} widthSm={100}>
        <ListStyled type={'inline'}>
          <ListItem>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </ListItem>
          <ListItem>
            {' '}
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </ListItem>
          <ListItem>
            {' '}
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </ListItem>
          <ListItem>
            {' '}
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </ListItem>
        </ListStyled>
        <ListStyled type={'inline'}>
          <ListItem>Privacy policy</ListItem>
          <ListItem>Terms of service</ListItem>
          <ListItem>Language</ListItem>
        </ListStyled>
      </ColContainer>
    </FooterContainerStyled>
  );
};
export default Footer;
