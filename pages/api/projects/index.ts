import type { NextApiRequest, NextApiResponse } from "next";
import projects from "data/projects.json";
import IProject from "src/types/IProject";

// --- access this via /api
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}`);
  switch (req.method) {
    case "GET":
      res.status(200).send(projects);
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}
