import { useParams, NavLink } from "react-router-dom";
import { OneMonster } from "../types/monsterTypes";
import { useContext, useState } from "react";
import { monsterContext } from "../components/context/MonsterContext";
import "./Monster.scss";
import { ACTIONS } from "../components/context/monsterReducer";

const Monster = () => {
  const { state, dispatch } = useContext(monsterContext);
  const params = useParams<{ monsterID: string }>();
  const [editMode, setEditMode] = useState<null | string>(null);

  //Hitta det monster som har samma id som params.monsterId
  let foundMonster: OneMonster | undefined = state.monster.find((m) => {
    /*params består av förnamn-efternamn, split("-") skapar en array av strängen i params.monsterId och splittar den till en array med egna element vid varje bindelstreck*/
    const splitParamsName = params.monsterID!.split("-");

    if (
      splitParamsName[0] === m.förnamn &&
      splitParamsName[1] === m.efternamn
    ) {
      return m;
    }
  });

  if (!foundMonster) {
    return <p>Laddar...</p>;
  }

  const handleREMOVE = () => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.REMOVE, payload: foundMonster.id });
    }, 1000);
  };

  return (
    <div className="Monster">
      <div className="img-box">
        <img
          src={`/src/assets/img/${foundMonster.img}`}
          alt={foundMonster.img}
        />
        <button className="btn radera" onClick={handleREMOVE}>
          <NavLink key={foundMonster.id} to={"/allamonster"}>
            Radera monster
          </NavLink>
        </button>
      </div>
      <div className="info-box">
        <h3>
          {foundMonster.förnamn} {foundMonster.efternamn}
        </h3>
        <div className="skol-info">
          <h4>Skol-info</h4>
          <p>Program: {foundMonster.program}</p>
          <p>Klass: {foundMonster.klass}</p>
          <p>Kurser: {foundMonster.kurser.join(", ")}</p>

          <ul key={foundMonster.id}>
            Betyg:{" "}
            {foundMonster.betyg.map((b, index) => {
              return (
                <li key={index}>
                  {b.kurs}: {b.betyg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monster;
/* useParams() är en funktion som används för att hämta 
parametrar från URL:en i en React-applikation. Till exempel,
 om din URL ser ut som "/profile/:userId", så kan useParams() 
 användas för att hämta värdet av ":userId" från URL:en. 
 Denna funktion gör det enkelt att få tillgång till och använda 
 dynamisk information som finns i URL:en i din React-komponent */
