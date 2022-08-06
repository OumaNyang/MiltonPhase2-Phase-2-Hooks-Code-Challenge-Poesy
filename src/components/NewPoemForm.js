import React, { useState } from "react";

function NewPoemForm({ onSubmitting }) {
  const [newPoem, setNewPoem] = useState({
    title: "",
    content: "",
    author: "",
  });

  function handleChange(e) {
    setNewPoem((newPoem) => ({ ...newPoem, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitting(newPoem);
    setNewPoem({ title: "", content: "", author: "" });
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="title"
        value={newPoem.title}
        placeholder="Title"
      />
      <input
        onChange={handleChange}
        name="author"
        value={newPoem.author}
        placeholder="Author"
      />
      <textarea
        onChange={handleChange}
        name="content"
        value={newPoem.content}
        placeholder="Write your masterpiece here..."
        rows={10}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;