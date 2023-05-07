import Loginbutton from '../../widgets/button';
import Input from '../../widgets/input';
import {
  Form,
  FormStyle,
  Heading,
  Paragraph,
  SighUpFacebook,
  DivLineStyle,
  LeftLine,
  OrSapn,
  RightLine,
  RegisterSapn,
  RegisterLink,
} from './style';

export default function SignIn() {
  return (
    <Form>
      <FormStyle>
        <Heading>Welcome Back</Heading>
        <Paragraph>Leo morbi pulvinar eleifend magna cursus augue</Paragraph>
        <SighUpFacebook>Sign Up With Facebook </SighUpFacebook>
        <SighUpFacebook>Sign Up With Google</SighUpFacebook>
        <DivLineStyle>
          <LeftLine />
          <OrSapn>OR</OrSapn>
          <RightLine />
        </DivLineStyle>
        <Input placeholder="Email"></Input>
        <Input placeholder="Enter Password"></Input>
        <Loginbutton variant="primary">Log in</Loginbutton>
        <RegisterSapn>
          Don't have an account ? <RegisterLink href="#">Register</RegisterLink>
        </RegisterSapn>
      </FormStyle>
    </Form>
  );
}
