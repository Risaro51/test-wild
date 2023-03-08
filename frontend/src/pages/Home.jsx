import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/style/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="Bodys">
      <Header />
      <div className="Totaldiv">
        <div className="Presdiv">
          <h3 className="Presentation">
            Mon test consiste à pouvoir rentrer des citations dans un
            formulaire, les citations seront stockées dans une base de donnée et
            nous auront accès à la liste des citations déjà enregistées
          </h3>
        </div>
        <div className="Homepagediv">
          <button
            type="button"
            className="button-blue"
            onClick={() => navigate("/write")}
          >
            Enregistrer sa citation
          </button>
          <button
            type="button"
            className="button-blue"
            onClick={() => navigate("/list")}
          >
            Voir la liste des citations
          </button>
        </div>
      </div>
    </div>
  );
}
