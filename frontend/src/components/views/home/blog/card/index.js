import React from 'react';
import {
  CardContainer,
  ImgCard,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from './style';

const card = ({ src }) => {
  return (
    <CardContainer>
      <ImgCard src={src}></ImgCard>
      <CardBody>
        <CardText>
          Lorem quis sunt magna dolor consectetur aliqua officia laborum
          reprehenderit
        </CardText>
        <CardLink>Read more</CardLink>
      </CardBody>
    </CardContainer>
  );
};

export default card;
