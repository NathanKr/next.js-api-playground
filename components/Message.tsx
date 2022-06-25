import { Alert } from "@mui/material";
import React, { FC } from "react";
import IMessage, { MessageType } from "types/IMessage";

const Message: FC<IMessage> = ({ type, message }) => {
  return type == MessageType.Success ? (
    <Alert severity="success">{message}</Alert>
  ) : (
    <Alert severity="error">{message}</Alert>
  );
};

export default Message;
