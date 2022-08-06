import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [myShowForm, setMyShowForm] = useState(false);

  // fetch poems from db
  useEffect(() => {
    fetch(" http://localhost:8004/poems")
      .then((res) => res.json())
      .then((ourPoems) => setPoems(ourPoems));
  }, []);

  // function to show/hide the button
  function handleButtonClick() {
    // return true if myShowForm is false otherwise true
    setMyShowForm((myShowForm) => !myShowForm);
  }

  // post to our server a new poem using POST method
  function handleOurNewPoem(recentPoem) {
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recentPoem),
    })
      .then((res) => res.json())
      .then((poem) => setPoems((poems) => [...poems, poem]));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleButtonClick}>
          {myShowForm ? "Hide" : "Show"} new poem form
        </button>
        {myShowForm ? <NewPoemForm onSubmitting={handleOurNewPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;