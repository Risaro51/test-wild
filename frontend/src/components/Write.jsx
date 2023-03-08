import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Header from "./Header";
import "./style/Write.css";

function Write() {
  const navigate = useNavigate();
  const citationRef = useRef();

  const handleSubmit = () => {
    const dataPost = {
      text: citationRef.current.value,
    };
    fetch(`http://localhost:5000/citations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="Bodys">
      <Header />
      <div className="Totaldivs">
        <form
          className="Form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label className="Labelcitation">
            Ecrivez votre citation :
            <input
              type="text"
              name="name"
              className="Labelcitation"
              ref={citationRef}
            />
          </label>
          <input type="submit" value="Enregistrer" className="Labelcitation" />
        </form>
        <button type="button" className="Buttons" onClick={() => navigate("/")}>
          Accueil
        </button>
      </div>
    </div>
  );
}

export default Write;
