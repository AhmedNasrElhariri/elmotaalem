import {
  Wrapper,
  LeftContent,
  RightContent,
  UL,
  LI,
  Heading,
  Image,
  Paragraph,
  HeadWrapper,
} from './style';

export default function ToWhom() {
  return (
    <Wrapper>
      <LeftContent>
        <HeadWrapper>
          <Heading>Who Is This For </Heading>
        </HeadWrapper>
        <UL>
          <LI>Preparatory</LI>
          <LI>Secondary</LI>
          <LI>Undergraduates</LI>
          <LI>Graduates</LI>
          <LI>Parents</LI>
          <LI>Academic Staff</LI>
          <LI>Career Shifters</LI>
        </UL>
      </LeftContent>
      <RightContent>
        <Image />
        <Paragraph>
          Reprehenderit esse labore id venaim non ex adipisicing amet ullamco
          dolor proident Reprehenderit esse labore id venaim ut Reprehenderit
          esse labore id venaim ut
        </Paragraph>
      </RightContent>
    </Wrapper>
  );
}
