import Link from "next/link";
import { useEffect, useState } from "react";
import IComment from "src/types/IComment";
import axios from "axios";
import {
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiFillEdit,
  AiOutlineFileAdd,
} from "react-icons/ai";

import styles from "styles/comments.module.css";
import { Tooltip } from "@mui/material";
import DialogYesNo from "src/components/gen-ui/DialogYesNo";
import IMessage, { MessageType } from "src/types/IMessage";
import { isProduction } from "src/utils/common-utils";
import Message from "src/components/gen-ui/Message";

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [message, setMessage] = useState<IMessage | undefined>(undefined);
  useEffect(getCommentsFromServer, []);

  function getComment(id: number): IComment | undefined {
    return comments.find((it) => it.id == id);
  }

  function getCommentsFromServer() {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data as IComment[]))
      .catch((err) => {
        setMessage({
          type: MessageType.Failure,
          message: "Fetch error",
        });
        console.log(err);
      });
  }

  const elems = comments.map((it) => (
    <div key={it.id} className={styles.grid_container}>
      <span>{it.description}</span>
      {isProduction() ? null : (
        <DialogYesNo
          dialogTitle={"Are you sure you want to delete this comment ?"}
          content={"You can not recover this operation"}
          yes={"Agree"}
          no={"Disagree"}
          yesClickHandler={() => deleteCommentFromServerAndClient(it.id!)}
          noClickHandler={() => console.log("no")}
        >
          <Tooltip title="Delete comment">
            <a>
              <AiOutlineDelete />
            </a>
          </Tooltip>
        </DialogYesNo>
      )}
      {isProduction() ? null : (
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
      )}
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
    setMessage(undefined);
    axios
      .delete(`/api/comments/${id}`)
      .then(function (response) {
        setMessage({
          type: MessageType.Success,
          message: "Message deletion success",
        });
        const tempComments = comments.filter((it) => it.id != id);
        setComments(tempComments);
      })
      .catch(function (error) {
        setMessage({
          type: MessageType.Failure,
          message: "Message deletion failure",
        });
      });
  }

  return (
    <div className={styles.comments}>
      <h2>Comments</h2>
      <Link href="/comments/create">
        <Tooltip title="Add comment">
          <a>
            <AiOutlineFileAdd />
          </a>
        </Tooltip>
      </Link>
      {message ? (
        <Message type={message.type} message={message.message} />
      ) : null}
      <div>{elems}</div>
    </div>
  );
};

export default Comments;
