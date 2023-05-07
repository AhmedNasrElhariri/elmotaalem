import {
  Wrapper,
  LeftContent,
  RightContent,
  LinksBox,
  Image,
  Form,
  Head,
  Paragraph,
} from './style';
import Input from '../../widgets/input';
import Button from '../../widgets/button';
import Span from '../../widgets/span';
import ResetPasswordImg from '../../../assets/images/mixed/3.png';

export default function ResetPassword() {
  return (
    <Wrapper>
      <LeftContent>
        <Form>
          <Head>Reset Your Password</Head>
          <Paragraph>Subtitle</Paragraph>
          <Input placeholder="Enter your new Password"></Input>
          <Input placeholder="Renter your Password"></Input>
          <LinksBox>
            <Span>This is the description area </Span>
            <Button variant="primary">Reset & continue</Button>
          </LinksBox>
        </Form>
      </LeftContent>
      <RightContent>
        <Image src={ResetPasswordImg}></Image>
      </RightContent>
    </Wrapper>
  );
}
