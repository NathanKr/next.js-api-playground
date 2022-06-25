import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import IComment from "types/IComment";

const CommentCreate = () => {
  const [message, setMessage] = useState("");

  function addComment(evt: SyntheticEvent): void {
    evt.preventDefault();
    const form = evt.target as any;
    const comment: IComment = {
      description: form.description.value,
      author: form.author.value,
    };
    sendNewCommentToServer(comment);
    (form as HTMLFormElement).reset();
  }

  function sendNewCommentToServer(comment: IComment): void {
    setMessage("");
    axios
      .post("/api/comments", comment)
      .then(function (response) {
        setMessage("Message creation success");
      })
      .catch(function (error) {
        setMessage("Message creation failure");
      });
  }

  return (
    <div>
      <a>Add Comment (Notice : changes are done only on memory not disk)</a>
      <form onSubmit={addComment}>
        <input
          required
          type="text"
          name="description"
          placeholder="Description"
        />
        <br />
        <input required type="text" name="author" placeholder="Author" />
        <br />
        <input type="submit" value="Add comment" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default CommentCreate;
