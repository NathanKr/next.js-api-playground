<h2>Motivation</h2>
<p>Play with api routes in next.js by implementing api according to the directory structure</p>
<p>
Notice that we implement here  
<ul>
<li>the client :directories public,pages</li>
<li>the server : directories data , api</li>
</ul>
</p>

<h2>Tree structure</h2>
<p>pages and api directories are mandatoris. the file names inside api are arbitraries e.g. here hello.ts</p>
<p>The directory structure determine the api route (same idea as for pages) e.g. to access index.ts inside blogs you need to access /api/blogs</p>


![tree-structure](./figs/api-tree-structure.png)


<h2>API</h2>
<h3>trivial api</h3>
check api/blogs , api/hello.ts , api/index.ts

<h3>simple api</h3>
<p>check api/comments</p>
<p>implement CRUD .api storage is comments.json under data directory but changes are done ONLY on memory !!! on restart you get original comments.json (i have a problem with saveChanges)</p>

<h4>Handle comments and comment without id : api/comments/index.ts</h4>
http methods : POST , GET

```ts
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

```

<h4>Handle comment with id : api/comments/[id].ts</h4>
http methods :  DELETE, GET, PATCH

```ts
// --- access this using id e.g. 1 :  /api/comments/1
export default function handleCommentWithId(
  req: NextApiRequest,
  res: NextApiResponse<IComment>
) {
  console.log(`http method : ${req.method} , req.url : ${req.url}}`);
  switch (req.method) {
    case "GET":
      const id = Number(req.query.id);
      const comment: IComment | undefined = getComment(id);
      comment
        ? res.status(200).send(comment)
        : res.status(404).json({
            description: "",
            author: "",
          });
      break;

    default:
      throw `unexpected req.method ${req.method}`;
  }
}

```


<h2>trivial handler</h2>

This is hello.ts. this code handle requests to /api/hello. Handler name is arbitrary but must be export as default

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

```


<h2>open issues</h2>
<ul>
<li>sometime the first add comment is not performed</li>
<li>next.js does not have the location of comments.json so i can not write to it</li>
<li>there are few strange problems related to typescript - search for todo</li>
</ul>