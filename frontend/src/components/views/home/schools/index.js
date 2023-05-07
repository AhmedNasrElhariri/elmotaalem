import React from 'react';
import {
  Head,
  Container,
  Check,
  CheckContent,
  Image,
  School,
  SchoolTitle,
  Content,
  ReadMore,
  CheckContentContainer,
  IconCheck,
} from './style';
import Img1 from '../../../../assets/images/schools/1.png';
import Img2 from '../../../../assets/images/schools/2.png';
import Icon from '../../../../assets/images/icons/Icon-2.png';
const FirstFold = () => {
  return (
    <>
      <Head>Schools</Head>
      <Container margin="0px 106.4px 75px 105px">
        <School mr="53.6px">
          <Image src={Img1} />
          <SchoolTitle>School Title</SchoolTitle>
          <Content>
            Lorem quis sunt magna dolor consectetur aliqua officia laborum
            reprehenderit
          </Content>
          <ReadMore>Read more</ReadMore>
        </School>
        <School mr="53.6px">
          <Image src={Img2} />
          <SchoolTitle>School Title</SchoolTitle>
          <Content>
            Lorem quis sunt magna dolor consectetur aliqua officia laborum
            reprehenderit
          </Content>
          <ReadMore>Read more</ReadMore>
        </School>
        <Check mr="0px">
          <CheckContentContainer>
            <CheckContent>Check </CheckContent>
            <CheckContent>All Schools</CheckContent>
            <IconCheck src={Icon}></IconCheck>
          </CheckContentContainer>
        </Check>
      </Container>
    </>
  );
};

export default FirstFold;
