import {
  Wrapper,
  LeftContent,
  DivForLeftContent,
  RightContent,
  DivForRightContent,
  LeftParagraph,
  PragraphsHead,
  LeftParagraphDiv,
  InsideWrapper,
  HeadingForRightCont,
  Paragraphs,
  RightParagraphDiv,
  RightParagraph,
  Icon,
  ImageForLeftDiv,
} from './style';
import Icon1 from '../../../../assets/images/we-offer/icons/Icon-1.png';
import Icon2 from '../../../../assets/images/we-offer/icons/Icon-2.png';

export default function WhatWeOffer() {
  return (
    <div>
      <Wrapper>
        <LeftContent>
          <DivForLeftContent>
            <ImageForLeftDiv />
          </DivForLeftContent>
        </LeftContent>
        <RightContent>
          <DivForRightContent>
            <HeadingForRightCont>What We Offer</HeadingForRightCont>
            <InsideWrapper>
              <LeftParagraphDiv>
                <LeftParagraph>
                  <Icon src={Icon1} />
                  <PragraphsHead>nulla ut ea</PragraphsHead>
                  <Paragraphs>
                    Reprehenderit esse labore id venaim non ex adipisicing amet
                    ullamco
                  </Paragraphs>
                </LeftParagraph>
              </LeftParagraphDiv>
              <LeftParagraphDiv>
                <LeftParagraph>
                  <Icon src={Icon2} />
                  <PragraphsHead>nulla ut ea</PragraphsHead>
                  <Paragraphs>
                    Reprehenderit esse labore id venaim non ex adipisicing amet
                    ullamco
                  </Paragraphs>
                </LeftParagraph>
              </LeftParagraphDiv>
            </InsideWrapper>
          </DivForRightContent>
        </RightContent>
      </Wrapper>
    </div>
  );
}
