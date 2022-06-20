// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IComment from "../../../types/IComment";
import { addComment, getComments } from "../../../utils/comments-storage";

// --- access this via /api/comments
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IComment[]>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}`);

  switch (req.method) {
    case "GET":
      res.status(200).send(getComments());
      break;

    case "POST":
      // todo nath : why is the problem
      // const newComment  = req.body as IComment;
      // comments.push(newComment);
      const newComment = req.body;
      newComment.id = Date.now();
      addComment(newComment);
      // saveComments();
      res.status(201).send(newComment);
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}
