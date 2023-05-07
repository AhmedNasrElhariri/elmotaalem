import Input from '../../widgets/input';
import Link from '../../widgets/link';
import Span from '../../widgets/span';
import SignWithButton from '../../widgets/sign-with-button';
import {
  Form,
  FormStyle,
  Heading,
  Paragraph,
  DivLineStyle,
  LeftLine,
  OrSapn,
  RightLine,
  BottomBox,
  LoginBtn,
} from './style';

export default function Registration() {
  return (
    <Form>
      <FormStyle>
        <Heading>Join Us</Heading>
        <Paragraph>Leo morbi pulvinar eleifend magna cursus augue</Paragraph>
        <SignWithButton>Sign Up With Facebook </SignWithButton>
        <SignWithButton> Sign Up With Google</SignWithButton>
        <DivLineStyle>
          <LeftLine />
          <OrSapn>OR</OrSapn>
          <RightLine />
        </DivLineStyle>
        <Input placeholder="Email"></Input>
        <Input placeholder="Name"></Input>
        <Input placeholder="Phone Number"></Input>
        <Input placeholder="Password"></Input>
        <BottomBox>
          <Span>
            By creating an account you agree to our
            <Link> Privacy Policy </Link>
            and
            <Link href="#"> Terms Of Use</Link>
          </Span>
          <LoginBtn variant="primary">Register</LoginBtn>
          <Span>
            Already Member? <Link href="#">Log in</Link>
          </Span>
        </BottomBox>
      </FormStyle>
    </Form>
  );
}
