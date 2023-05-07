import React from 'react';
import {
  TestTitleContainer,
  TestTitle,
  Title,
  Content,
  Image,
  Button,
  Definition,
  DefinitionContent,
  Scores,
  Div,
  ScoreItems,
} from './style';
const SkillTest = () => {
  return (
    <>
      <TestTitleContainer>
        <TestTitle>
          <Title>Test Title</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin mi quis gravida tellus. Et egestas tellus amet, congue
            eleifend dignissim imperdiet varius lectus.
          </Content>
          <Button> take test </Button>
        </TestTitle>
        <Image src="https://media.gettyimages.com/photos/woman-hands-working-with-blank-screen-laptop-computer-templatehands-picture-id1158206379" />
      </TestTitleContainer>
      <Div>
        <Definition>
          <DefinitionContent
            margin="0px 178px 30px 0px"
            fs="18px"
            fontWeight={500}
            color="#375188"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin mi quis gravida tellus. Et egestas tellus amet, congue
            eleifend dignissim imperdiet varius lectus.
          </DefinitionContent>
          <DefinitionContent
            margin="32px 32px 30px 0px"
            fs="13px"
            fontWeight="normal"
            color="#375188"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            iaculis odio gravida blandit massa pulvinar consequat id. Aliquet
            interdum et tristique sed tincidunt accumsan. Quam et ultrices eu
            in. Id vel eget semper sapien, neque accumsan odio. Cursus nulla
            facilisi ac lacus. Iaculis enim blandit pharetra, viverra. Ipsum
            donec quis morbi purus fringilla neque, erat. Nibh posuere nec
            pretium, pellentesque tellus risus. Varius pretium pretium non
            vulputate. Massa bibendum in hendrerit ac duis nulla cursus. Diam at
            et nisl elementum tristique. Enim ante pharetra consectetur sit
            tortor. Eget aliquam et eu laoreet. Scelerisque sodales nulla
            dapibus felis consequat. Leo id amet nunc sem semper urna vitae
            magna suspendisse. Vulputate quis dolor curabitur est. Orci, amet,
            velit ac dui dictum elit, volutpat. Mattis suspendisse ac fusce
            adipiscing sem augue. Aliquam erat risus interdum aliquet et
            tincidunt id lectus ut. Mauris consequat fermentum, elit lectus
            mauris a ornare massa. Dignissim porttitor elit volutpat netus
            feugiat cras in dui, id. Nisl mauris eget dignissim at tristique
            velit vel. Mauris in faucibus gravida placerat elementum ut.
            Imperdiet scelerisque malesuada dictum semper at arcu pharetra.
            Tempor.
          </DefinitionContent>
          <DefinitionContent
            margin="0px 32px 96px 0px"
            fs="13px"
            fontWeight="normal"
            color="#375188"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            iaculis odio gravida blandit massa pulvinar consequat id. Aliquet
            interdum et tristique sed tincidunt accumsan. Quam et ultrices eu
            in. Id vel eget semper sapien, neque accumsan odio. Cursus nulla
            facilisi ac lacus. Iaculis enim blandit pharetra, viverra. Ipsum
            donec quis morbi purus fringilla neque, erat. Nibh posuere nec
            pretium, pellentesque tellus risus. Varius pretium pretium non
            vulputate. Massa bibendum in hendrerit ac duis nulla cursus. Diam at
            et nisl elementum tristique. Enim ante pharetra consectetur sit
            tortor. Eget aliquam et eu laoreet. Scelerisque sodales nulla
            dapibus felis consequat. Leo id amet nunc sem semper urna vitae
            magna suspendisse. Vulputate quis dolor curabitur est. Orci, amet,
            velit ac dui dictum elit, volutpat. Mattis suspendisse ac fusce
            adipiscing sem augue. Aliquam erat risus interdum aliquet et
            tincidunt id lectus ut. Mauris consequat fermentum, elit lectus
            mauris a ornare massa. Dignissim porttitor elit volutpat netus
            feugiat cras in dui, id. Nisl mauris eget dignissim at tristique
            velit vel. Mauris in faucibus gravida placerat elementum ut.
            Imperdiet scelerisque malesuada dictum semper at arcu pharetra.
            Tempor.
          </DefinitionContent>
        </Definition>
        <Scores>
          <DefinitionContent
            fs="18px"
            fontWeight={500}
            color="#375188"
            margin="16px"
          >
            Your Last Scores
          </DefinitionContent>
          <ScoreItems>
            <DefinitionContent fs="18px" fontWeight="normal" color="#375188">
              Date
            </DefinitionContent>
            <DefinitionContent fs="18px" fontWeight="normal" color="#375188">
              Score
            </DefinitionContent>
          </ScoreItems>
          <ScoreItems>
            <DefinitionContent fs="18px" fontWeight="normal" color="#375188">
              Date
            </DefinitionContent>
            <DefinitionContent fs="18px" fontWeight="normal" color="#375188">
              Score
            </DefinitionContent>
          </ScoreItems>
        </Scores>
      </Div>
    </>
  );
};

export default SkillTest;
