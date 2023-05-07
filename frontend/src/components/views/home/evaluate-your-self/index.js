import React from 'react';
import Button from '../../../widgets/button';
import { Container, SubContainer, Title, Content } from './style';
const EvaluateYourSelf = () => {
  return (
    <>
      <Container>
        <SubContainer bgColor="#f2f5fa">
          <Title color="#0a66c2">Job Skills</Title>
          <Content color="#0a66c2" margin="20px 107.8px 30px 159.4px">
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing
            amet ullamco dolor proident
          </Content>
          <Button variant="primary">take test</Button>
        </SubContainer>
        <SubContainer bgColor="#0a66c2">
          <Title color="#ffffff">Evaluate Yourself</Title>
          <Content color="#ffffff" margin="20px 159.4px 30px 107.8px">
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing
            amet ullamco dolor proident
          </Content>
          <Button variant="default">take test</Button>
        </SubContainer>
      </Container>
    </>
  );
};

export default EvaluateYourSelf;
