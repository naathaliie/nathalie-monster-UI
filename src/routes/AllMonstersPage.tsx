import { useContext } from "react";
import { monsterContext } from "../components/context/MonsterContext";
import "./AllMonstersPage.scss";

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
          <ul key={m.id}>
            <li>
              {m.förnamn} {m.efternamn}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AllMonstersPage;
