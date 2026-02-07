import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [facts, setFacts] = useState([]);
  const [newFact, setNewFact] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFacts();
  }, []);

  const fetchFacts = () => {
    fetch("http://127.0.0.1:8000/api/facts/")
      .then((res) => res.json())
      .then((data) => setFacts(data));
  };

  const addOrUpdateFact = (e) => {
    e.preventDefault();

    const url = editId
      ? `http://127.0.0.1:8000/api/facts/${editId}/`
      : "http://127.0.0.1:8000/api/facts/";

    const method = editId ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fact: newFact }),
    }).then(() => {
      setNewFact("");
      setEditId(null);
      fetchFacts();
    });
  };

  const deleteFact = (id) => {
    fetch(`http://127.0.0.1:8000/api/facts/${id}/`, {
      method: "DELETE",
    }).then(() => fetchFacts());
  };

  const editFact = (fact) => {
    setNewFact(fact.fact);
    setEditId(fact.id);
  };

  return (
    <div className="container">
      <h1>Facts App</h1>

      <form onSubmit={addOrUpdateFact}>
        <input
          type="text"
          placeholder="Enter fact"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      {facts.map((fact) => (
        <div className="fact-item" key={fact.id}>
          <span>{fact.fact}</span>
          <div>
            <button className="edit-btn" onClick={() => editFact(fact)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteFact(fact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
