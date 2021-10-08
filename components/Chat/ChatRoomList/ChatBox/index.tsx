import TextArea from "@/components/common/TextArea";
import React from "react";
import { ChatInputContainer, Form, SendButton, Toolbox } from "./style";

const ChatBox = () => {
  return (
    <ChatInputContainer>
      <Form>
        <TextArea />
        <Toolbox>
          <SendButton>
            <i
              className="c-icon c-icon--paperplane-filled"
              aria-hidden="true"
            />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatInputContainer>
  );
};

export default ChatBox;
