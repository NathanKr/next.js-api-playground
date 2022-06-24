import axios from "axios";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import IComment from "../../types/IComment";

const CommentEdit = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const comment: IComment = router.query as unknown as IComment;

  function sendEditCommentToServer(): void {
    setMessage("");
    axios
      .patch(`/api/comments/${comment.id}`, { ...comment })
      .then(function (response) {
        setMessage("Message deletion success");
      })
      .catch(function (error) {
        setMessage("Message deletion failure");
      });
  }

  function editComment(evt: SyntheticEvent): void {
    evt.preventDefault();
    const form = evt.target as any;
    comment.description = form.description.value;
    comment.author = form.author.value;
    sendEditCommentToServer();
    (form as HTMLFormElement).reset();
  }

  return (
    <div>
      <a>Add Comment (Notice : changes are done only on memory not disk)</a>
      <form onSubmit={editComment}>
        <input
          required
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={comment.description}
        />
        <br />
        <input
          required
          type="text"
          name="author"
          placeholder="Author"
          defaultValue={comment.author}
        />
        <br />
        <input type="submit" value="Edit comment" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default CommentEdit;
