import { useContext } from "react";
import { monsterContext } from "../components/context/MonsterContext";
import "./AllMonstersPage.scss";
import { NavLink } from "react-router-dom";

const AllMonstersPage = () => {
  const { state } = useContext(monsterContext);

  //*Sortera monster efter förnamn i alfabetisk ordning
  const sortedMonsters = state.monster.slice().sort((a, b) => {
    return a.förnamn.localeCompare(b.efternamn);
  });

  return (
    <div className="AllMonstersPage">
      <h1>Alla monster på Monster UI</h1>

      {sortedMonsters.map((m) => {
        return (
          <NavLink
            className={"navLink"}
            key={m.id}
            to={`/sökmonster/${m.förnamn}-${m.efternamn}`}
          >
            {m.förnamn} {m.efternamn}
          </NavLink>
        );
      })}
    </div>
  );
};

export default AllMonstersPage;
