import React from 'react';
import { BlogContainer, Title, ShortText, CardsBox } from './style';
import Card from './card';
import CardImg1 from '../../../../assets/images/our-blog/1.png';
import CardImg2 from '../../../../assets/images/our-blog/2.png';
import CardImg3 from '../../../../assets/images/our-blog/3.png';

const blog = () => {
  return (
    <>
      <BlogContainer>
        <Title>Our Blog</Title>
        <ShortText>
          Reprehenderit esse labore id veniam ut veniam non ex adipisicing
        </ShortText>
        <CardsBox>
          <Card src={CardImg1} />
          <Card src={CardImg2} />
          <Card src={CardImg3} />
        </CardsBox>
      </BlogContainer>
    </>
  );
};

export default blog;
