import type { NextApiRequest, NextApiResponse } from "next";
import blogs from "data/blogs.json";
import IBlog from "src/types/IBlog";

// --- access this via /api
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog[]>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}`);
  switch (req.method) {
    case "GET":
      res.status(200).send(blogs);
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}
