import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f2f5fa;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;
export const PersonsList = styled.div`
  background-color: #ffffff;
  width: 269px;
  height: 452px;
  margin: 66px 16px 0px 85px;
  @media only screen and (max-width: 768px) {
    margin: 20px auto;
    width: 90%;
    padding: 16px 0;
  }
`;
export const Person = styled.div`
  margin: 12px 16px 0px 16px;
  @media only screen and (max-width: 768px) {
    margin: 16px;
  }
`;
export const PersonData = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`;
export const NameDiv = styled.div`
  display: flex;
  height: 59px;
  align-items: center;
  margin-left: ${props => props.marginLeft};
`;
export const Image = styled.img`
  width: 30px;
  height: 30px;
  border: solid 1px #0a66c2;
  border-radius: 50%;
  margin-right: 8px;
`;
export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #93a1be;
`;
export const Date = styled.div`
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: right;
  color: #93a1be;
`;
export const MessageData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Message = styled.div`
  height: 15px;
  width: 193px;
  margin: 7px 27px 6px 0;
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: right;
  color: #93a1be;
`;
export const Number = styled.div`
  width: 25px;
  height: 25px;
  line-height: 25px;

  background-color: #006df5;
  border-radius: 50%;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
  }
`;
export const Line = styled.div`
  width: ${props => props.width};
  height: 1px;
  background-color: ${props => props.bgColor};
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Chat = styled.div`
  background-color: #ffffff;
  margin: 66px 85px 88px 0px;
  width: 825px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MessageSenderContent = styled.div`
  padding: 24px;
  background-color: #f2f5fa;
  color: #375188;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 8px;
`;
export const MessageReciverContent = styled.div`
  padding: 24px;
  background-color: #eef6ff;
  color: #375188;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 8px;
`;
export const SentDate = styled.div`
  width: 243px;
  height: 16px;
  font-family: Roboto;
  font-size: 13px;
  text-align: right;
  color: #93a1be;
  float: right;
`;
export const SendMessageDiv = styled.div`
  width: 371px;
  margin: 32px;
`;
export const RwciveMessageDiv = styled.div`
  width: 371px;
  margin: 32px;
  float: right;
`;
export const ChatingDiv = styled.div`
  height: 634px;
`;
export const TypingDiv = styled.div`
  display: flex;
  height: 131px;
`;
export const TypingMessage = styled.div`
  margin: 20px 29px 20px 19px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #93a1be;
  padding: 20px 16px 16px 19px;
  width: 669px;
`;
export const SendButton = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: #64a1ea;
  margin: 83px 16px 16px 0px;
  width: 92px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
