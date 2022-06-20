import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/comments">
        <a>Click here to navigate to Comments page</a>
      </Link>
      <p>
        The follwing api end poin exist according to the directory tree. In
        development prefix using http://localhost:3000
      </p>
      <ul>
        <li>/api/blogs</li>
        <li>/api/blogs/latest</li>
        <li>/api/comments</li>
        <li>/api</li>
        <li>/api/hello</li>
      </ul>
    </div>
  );
};

export default Home;
