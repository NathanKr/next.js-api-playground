import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import Message from "src/components/gen-ui/Message";
import React, { SyntheticEvent, useState } from "react";
import IComment from "src/types/IComment";
import IMessage, { MessageType } from "src/types/IMessage";

const CommentCreate = () => {
  const [message, setMessage] = useState<IMessage | undefined>(undefined);

  function addComment(evt: SyntheticEvent): void {
    evt.preventDefault();
    const form = evt.target as any;
    const comment: IComment = {
      description: form.description.value,
      author: form.author.value,
      email: form.email.value,
    };
    sendNewCommentToServer(comment);
    (form as HTMLFormElement).reset();
  }

  function sendNewCommentToServer(comment: IComment): void {
    setMessage(undefined);
    axios
      .post("/api/comments", comment)
      .then(function (response) {
        setMessage({
          type: MessageType.Success,
          message: "Create success",
        });
      })
      .catch(function (error) {
        setMessage({
          type: MessageType.Failure,
          message: "Create failure",
        });
      });
  }

  return (
    <div>
      <form onSubmit={addComment}>
        <Stack spacing={2}>
          
          <TextField required type="text" name="author" label="Author" />
          <TextField required type="email" name="email" label="Email" />
          <TextField
            required
            type="text"
            name="description"
            label="Description"
          />
          <Button variant="contained" type="submit">
            Add comment
          </Button>
        </Stack>
      </form>
      {message ? (
        <Message type={message.type} message={message.message} />
      ) : null}
    </div>
  );
};

export default CommentCreate;
