import Button from '../../widgets/button';
import Input from '../../widgets/input';
import { Form, FormStyle, Heading, Paragraph } from './style';

export default function SignIn() {
  return (
    <Form>
      <FormStyle>
        <Heading>Forgot Your Password ?</Heading>
        <Paragraph>
          enter your email and we will send you a link , it will be valid after
          2 hours
        </Paragraph>
        <Input placeholder="Email"></Input>
        <Button variant="primary">Send me a link</Button>
      </FormStyle>
    </Form>
  );
}
