import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import Message from "components/Message";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import IComment from "types/IComment";
import IMessage, { MessageType } from "types/IMessage";

const CommentEdit = () => {
  const [message, setMessage] = useState<IMessage | undefined>(undefined);
  const router = useRouter();
  const comment: IComment = router.query as unknown as IComment;

  function sendEditCommentToServer(): void {
    setMessage(undefined);
    axios
      .patch(`/api/comments/${comment.id}`, { ...comment })
      .then(function (response) {
        setMessage({
          type: MessageType.Success,
          message: "Edit success",
        });
      })
      .catch(function (error) {
        setMessage({
          type: MessageType.Failure,
          message: "Edit failure",
        });
      });
  }

  function editComment(evt: SyntheticEvent): void {
    evt.preventDefault();
    const form = evt.target as any;
    comment.description = form.description.value;
    comment.author = form.author.value;
    sendEditCommentToServer();
    // (form as HTMLFormElement).reset(); no need to reset
  }

  return (
    <div>
      <h2>Edit Comment</h2>
      <form onSubmit={editComment}>
        <Stack spacing={2}>
          <TextField
            required
            type="text"
            name="description"
            label="Description"
            defaultValue={comment.description}
          />
          <TextField
            required
            type="text"
            name="author"
            label="Author"
            defaultValue={comment.author}
          />
          <Button  variant="contained" type="submit">
            Edit comment
          </Button>
        </Stack>
      </form>
      {message ? (
        <Message type={message.type} message={message.message} />
      ) : null}
    </div>
  );
};

export default CommentEdit;
