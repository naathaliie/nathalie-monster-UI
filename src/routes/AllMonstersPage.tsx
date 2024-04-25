import { useContext } from "react";
import { monsterContext } from "../components/context/MonsterContext";
import "./AllMonstersPage.scss";
import { NavLink } from "react-router-dom";


const AllMonstersPage = () => {
  const { state, dispatch } = useContext(monsterContext);

  //*Sortera monster efter förnamn i alfabetisk ordning
  const sortedMonsters = state.monster.slice().sort((a, b) => {
    return a.förnamn.localeCompare(b.efternamn);
  });

  const handleREMOVE = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  return (
    <div className="AllMonstersPage">
      <h1>Alla monster på Monster UI</h1>

      {sortedMonsters.map((m, index) => {
        return (
          <span key={index}>
            <NavLink
              className={"navLink"}
              key={m.id}
              to={`/sökmonster/${m.förnamn}-${m.efternamn}`}
            >
              {m.förnamn} {m.efternamn}
            </NavLink>
            <button
              className="btn"
              onClick={() => {
                handleREMOVE(m.id)
                console.log("Du klickade på radera-knappen med id = ", m.id);
              }}
            >
              radera
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default AllMonstersPage;
