import {
  Wrapper,
  LeftContent,
  Span,
  Button,
  Head,
  Paragraph,
  RightContent,
} from './style';

export default function SignUpBanner() {
  return (
    <Wrapper>
      <LeftContent>
        <Paragraph>SIGN UP NOW!</Paragraph>
        <Head>& Start Advancing</Head>
      </LeftContent>
      <RightContent>
        <Button>
          <Span>Sign Up</Span>
        </Button>
      </RightContent>
    </Wrapper>
  );
}
