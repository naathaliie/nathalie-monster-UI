import { useParams } from "react-router-dom";
import { OneMonster } from "../types/monsterTypes";
import { useContext } from "react";
import { monsterContext } from "../components/context/MonsterContext";
import "./Monster.scss";

const Monster = () => {
  const { state } = useContext(monsterContext);
  const params = useParams<{ monsterID: string }>();

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

  return (
    <div className="Monster">
      <h3>
        {foundMonster.förnamn} {foundMonster.efternamn}
      </h3>
      <img src={`/src/assets/img/${foundMonster.img}`} alt={foundMonster.img} />
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
