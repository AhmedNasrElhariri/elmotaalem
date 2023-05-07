import React from 'react';
import {
  BannerBoxStyle,
  LeftBox,
  RightBox,
  BannerTitle,
  BannerInfo,
  BannerText,
  BtnGroup,
  ImgGroup,
  Button,
  Image,
} from './style';
import Img1 from '../../../../assets/images/banner/Group-1.png';

const Banner = () => {
  return (
    <BannerBoxStyle>
      <LeftBox>
        <BannerTitle>Main Title</BannerTitle>
        <BannerInfo>
          <BannerText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin mi quis gravida tellus. Et egestas tellus amet, congue
            eleifend dignissim imperdiet varius lectus.
          </BannerText>
          <BtnGroup>
            <Button color="#64a1ea">button one</Button>
            <Button color="#f0cc26"> button two</Button>
          </BtnGroup>
        </BannerInfo>
      </LeftBox>
      <RightBox>
        <ImgGroup>
          <Image src={Img1} margin="0px -19px 0 0px"></Image>
        </ImgGroup>
      </RightBox>
    </BannerBoxStyle>
  );
};
export default Banner;
