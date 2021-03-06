import React, { useEffect, useState } from "react";
import Message from "src/components/gen-ui/Message";
import SimpleAccordion from "src/components/gen-ui/SimpleAccordion";
import IBlog from "src/types/IBlog";
import IMessage, { MessageType } from "src/types/IMessage";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [message, setMessage] = useState<IMessage | undefined>(undefined);

  useEffect(getBlogsFromServer, []);

  function getBlogsFromServer() {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data as IBlog[]))
      .catch((err) => {
        setMessage({
          type: MessageType.Failure,
          message: "Fetch error",
        });
        console.log(err);
      });
  }

  const array = blogs.map((blog) => {
    return { summary: blog.subject, details: blog.body };
  });

  return (
    <div>
      <h2>Blogs</h2>

      {message ? (
        <Message type={message.type} message={message.message} />
      ) : null}
      <SimpleAccordion items={array} />
    </div>
  );
};

export default Blogs;
