import React from 'react';
import {
  Container,
  Content,
  ErrorContent,
  ErrorCode,
  ErrorMessage,
  Image,
} from './style';
import ErrorImg from '../../../assets/images/mixed/1.png';
const ErrorPage = () => {
  return (
    <>
      <Container>
        <Content>
          <ErrorContent>
            Main Message/Don’t worry .. you didn’t break the internet yet!, It’s
            just a 404
          </ErrorContent>
          <ErrorCode>Error Code/404</ErrorCode>
          <ErrorMessage>
            Error Message/This page can’t be found or your link has a typo
          </ErrorMessage>
        </Content>
        <Image src={ErrorImg}></Image>
      </Container>
    </>
  );
};

export default ErrorPage;
