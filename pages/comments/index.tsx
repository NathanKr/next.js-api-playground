import Link from "next/link";
import { useEffect, useState } from "react";
import IComment from "types/IComment";
import axios from "axios";
import {
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiFillEdit,
  AiOutlineFileAdd,
} from "react-icons/ai";

import styles from "styles/comments.module.css";
import { Tooltip } from "@mui/material";

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [message, setMessage] = useState("");
  useEffect(getCommentsFromServer, []);

  function getComment(id: number): IComment | undefined {
    return comments.find((it) => it.id == id);
  }

  function getCommentsFromServer() {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data as IComment[]))
      .catch((err) => {
        setMessage("Fetch error");
        console.log(err);
      });
  }

  const elems = comments.map((it) => (
    <div key={it.id} className={styles.grid_container}>
      <span>{it.description}</span>
      <Tooltip title="Delete comment">
        <a onClick={() => deleteCommentFromServerAndClient(it.id!)}>
          <AiOutlineDelete />
        </a>
      </Tooltip>

      <Link
        href={{
          pathname: "/comments/edit",
          query: { ...getComment(it.id!) },
        }}
      >
        <Tooltip title="Edit comment">
          <a>
            <AiFillEdit />
          </a>
        </Tooltip>
      </Link>
      <Link href={`/comments/${it.id}`}>
        <Tooltip title="Comment details">
          <a>
            <AiOutlineInfoCircle />
          </a>
        </Tooltip>
      </Link>
    </div>
  ));

  function deleteCommentFromServerAndClient(id: number): void {
    setMessage("");
    axios
      .delete(`/api/comments/${id}`)
      .then(function (response) {
        setMessage("Message deletion success");
        const tempComments = comments.filter((it) => it.id != id);
        setComments(tempComments);
      })
      .catch(function (error) {
        setMessage("Message deletion failure");
      });
  }

  return (
    <div>
      <h2>Comments</h2>

      <Link href="/comments/create">
        <Tooltip title="Add comment">
          <a>
            <AiOutlineFileAdd />
          </a>
        </Tooltip>
      </Link>
      <p>{message}</p>
      {elems}
    </div>
  );
};

export default Comments;
