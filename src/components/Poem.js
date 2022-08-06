import React, { useState } from "react";

function Poem({ title, content, author }) {
  const [isRead, setIsRead] = useState(false);

  // function to mark the content as read or not
  function handleReadClick() {
    setIsRead((isRead) => !isRead);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleReadClick}>
        Mark as {isRead ? "unread" : "read"}
      </button>
    </div>
  );
}

export default Poem;