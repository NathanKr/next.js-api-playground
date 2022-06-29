import React, { useEffect, useState } from "react";
import SimpleAccordion, {
  ISimpleAccordion,
} from "src/components/gen-ui/SimpleAccordion";
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

  const array = blogs.map((blog) => {
    return { summary: blog.subject, details: blog.body };
  });

  return (
    <div>
      <h2>Blogs</h2>

      <p>{message}</p>
      <SimpleAccordion items={array} />
    </div>
  );
};

export default Blogs;
