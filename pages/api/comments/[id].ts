// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import IComment from "../../../types/IComment";
import comments from "../../../public/data/comments.json";

// --- access this via e.g. the comment id /api/comments/2

// todo nath , how to use the interface ??
interface IId {
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IComment>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}}`);
  switch (req.method) {
    case "GET":
      const id = Number(req.query.id);
      res.status(200).send(comments[id]);
      break;

    default:
      throw `unexpected req.method ${req.method}`;
      break;
  }
}
