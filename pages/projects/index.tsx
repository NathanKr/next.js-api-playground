import React, { useEffect, useState } from "react";
import MasonryImageList from "src/components/gen-ui/MasonryImageList";
import Message from "src/components/gen-ui/Message";
import IMessage, { MessageType } from "src/types/IMessage";
import IProject from "src/types/IProject";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [message, setMessage] = useState<IMessage | undefined>(undefined);

  useEffect(getBlogsFromServer, []);

  function getBlogsFromServer() {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data as IProject[]))
      .catch((err) => {
        setMessage({
          type: MessageType.Failure,
          message: "Fetch error",
        });
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Portfolio</h2>
      <MasonryImageList projects={projects} />
      {message ? (
        <Message type={message.type} message={message.message} />
      ) : null}
    </div>
  );
};

export default Projects;
