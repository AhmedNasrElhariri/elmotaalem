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
} from '../schools/style';
import Img1 from '../../../../assets/images/schools/1.png';
import Img2 from '../../../../assets/images/schools/2.png';
const FirstFold = () => {
  return (
    <>
      <Head>Colleges</Head>
      <Container margin="0px 106.4px 75px 105px">
        <Check mr="55px">
          <CheckContentContainer>
            <CheckContent>Check </CheckContent>
            <CheckContent>All Colleges</CheckContent>
          </CheckContentContainer>
        </Check>
        <School mr="53.6px">
          <Image src={Img1} />
          <SchoolTitle>College Title</SchoolTitle>
          <Content>
            Lorem quis sunt magna dolor consectetur aliqua officia laborum
            reprehenderit
          </Content>
          <ReadMore>Read more</ReadMore>
        </School>
        <School mr="0px">
          <Image src={Img2} />
          <SchoolTitle>School Title</SchoolTitle>
          <Content>
            Lorem quis sunt magna dolor consectetur aliqua officia laborum
            reprehenderit
          </Content>
          <ReadMore>Read more</ReadMore>
        </School>
      </Container>
    </>
  );
};

export default FirstFold;
