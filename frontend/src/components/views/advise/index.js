import React from 'react';
import {
  Container,
  PersonsList,
  Person,
  PersonData,
  NameDiv,
  Image,
  Name,
  Date,
  MessageData,
  Message,
  Number,
  Line,
  Chat,
  SendMessageDiv,
  RwciveMessageDiv,
  MessageSenderContent,
  MessageReciverContent,
  SentDate,
  ChatingDiv,
  TypingDiv,
  TypingMessage,
  SendButton,
} from './style';
const Advise = () => {
  return (
    <>
      <Container>
        <PersonsList>
          <Person>
            <PersonData>
              <NameDiv height="30px">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png"></Image>
                <Name>Person Name</Name>
              </NameDiv>
              <Date>7:00 PM</Date>
            </PersonData>
            <MessageData>
              <Message>Porttitor vulputate facilisi quantam</Message>
              <Number>1</Number>
            </MessageData>
            <Line width="237px" bgColor="#dde2eb" />
          </Person>
          <Person>
            <PersonData>
              <NameDiv height="30px">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png"></Image>
                <Name>Person Name</Name>
              </NameDiv>
              <Date>7:00 PM</Date>
            </PersonData>
            <MessageData>
              <Message>Porttitor vulputate facilisi quantam</Message>
              <Number>1</Number>
            </MessageData>
            <Line width="237px" bgColor="#dde2eb" />
          </Person>
          <Person>
            <PersonData>
              <NameDiv>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png"></Image>
                <Name>Person Name</Name>
              </NameDiv>
              <Date>7:00 PM</Date>
            </PersonData>
            <MessageData>
              <Message>Porttitor vulputate facilisi quantam</Message>
              <Number>1</Number>
            </MessageData>
            <Line width="237px" bgColor="#dde2eb" />
          </Person>
        </PersonsList>
        <Chat>
          <NameDiv marginLeft="21px">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png"></Image>
            <Name>Person Name</Name>
          </NameDiv>
          <Line width="825px" bgColor="#f2f5fa" />
          <ChatingDiv>
            <SendMessageDiv>
              <MessageSenderContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, urna
                lorem pellentesque volutpat non, euismod. Iaculis nibh massa
                phasellus enim amet, tincidunt urna cursus. Ultrices amet cras
                consectetur orci, sed lectus vel pulvinar. Ornare vitae auctor
                facilisi blandit nec interdum ut maecenas tortor. Porta cursus
                natoque turpis dui. Porttitor nisi, quis in nulla est a cursus.
                Fusce at ligula rhoncus sed elementum. Nisl porttitor mauris.
              </MessageSenderContent>
              <SentDate>Feb 22, 2021 7:00 PM</SentDate>
            </SendMessageDiv>
            <RwciveMessageDiv>
              <MessageReciverContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, urna
                lorem pellentesque volutpat non, euismod. Iaculis nibh massa
                phasellus enim amet, tincidunt urna cursus. Ultrices amet cras
                consectetur orci, sed lectus vel pulvinar. Ornare vitae auctor
                facilisi blandit nec interdum ut maecenas tortor. Porta cursus
                natoque turpis dui. Porttitor nisi, quis in nulla est a cursus.
                Fusce at ligula rhoncus sed elementum. Nisl porttitor mauris.
              </MessageReciverContent>
              <SentDate>Feb 22, 2021 7:00 PM</SentDate>
            </RwciveMessageDiv>
          </ChatingDiv>
          <Line width="825px" bgColor="#f2f5fa" />
          <TypingDiv>
            <TypingMessage>
              Reply to Advisor Here to keep the conversation going ...
            </TypingMessage>
            <SendButton>send</SendButton>
          </TypingDiv>
        </Chat>
      </Container>
    </>
  );
};
export default Advise;
