import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function List() {
  const navigate = useNavigate();
  const [citations, setCitations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/citations", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCitations(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div>
          {citations.map((citation) => (
            <p>{citation.text}</p>
          ))}
        </div>
        <button type="button" className="Buttons" onClick={() => navigate("/")}>
          Accueil
        </button>
      </div>
    </div>
  );
}

export default List;
