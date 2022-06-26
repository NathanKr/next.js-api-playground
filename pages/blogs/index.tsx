import React, { useEffect, useState } from "react";
import IBlog from "src/types/IBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [message, setMessage] = useState("");
  useEffect(getBlogsFromServer, []);

  function getBlogsFromServer() {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data as IBlog[]))
      .catch((err) => {
        setMessage("Fetch error");
        console.log(err);
      });
  }

  const elems = blogs.map((it, i) => <div key={i}>{it.name}</div>);

  return (
    <div>
      <h2>Blogs</h2>
      <p>{message}</p>
      {elems}
    </div>
  );
};

export default Blogs;
