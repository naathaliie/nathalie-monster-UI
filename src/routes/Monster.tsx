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
      <div className="img-box">
        <img
          src={`/src/assets/img/${foundMonster.img}`}
          alt={foundMonster.img}
        />
        <button>Radera monster</button>
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
          <p>
            Betyg:{" "}
            <ul key={foundMonster.id}>
              {foundMonster.betyg.map((b) => {
                return (
                  <li>
                    {b.kurs}: {b.betyg}
                  </li>
                );
              })}
            </ul>
          </p>
        </div>
        <div className="monster-info">
          <h4>Monster-info</h4>
          <p>Hemstad: {foundMonster.hemstad}</p>
          <p>Antal ögon: {foundMonster.utseende.antal_ögon}</p>
          <p>Ögonfärg: {foundMonster.utseende.ögonfärg}</p>
          <p>
            {foundMonster.utseende.antal_tentakler > 0 &&
              `Tentakler: ${foundMonster.utseende.antal_tentakler}`}
          </p>
          <p>
            Hud: {foundMonster.utseende.hud}, {foundMonster.utseende.hudfärg}
          </p>
          <p>
            {foundMonster.utseende.antal_horn > 0 &&
              `Horn: ${foundMonster.utseende.antal_horn}`}
          </p>
          <p>Har päls: {foundMonster.utseende.päls ? "Ja" : "Ja"}</p>
          <p>
            {foundMonster.utseende.antal_horn > 0 &&
              `Horn: ${foundMonster.utseende.antal_horn}`}
          </p>
          <p>
            Magiska förmågor:{" "}
            {foundMonster.utseende.magiska_förmågor.join(", ")}
          </p>
          <p>
            Speciella och unika saker:{" "}
            {foundMonster.utseende.speciella_unika_saker.join(", ")}
          </p>
          <br />
          <h4>Kost:</h4>
          <p>Äter kött: {foundMonster.kost.köttätare ? "Ja" : "Nej"}</p>
          <p>Äter kött: {foundMonster.kost.växtätare ? "Ja" : "Nej"}</p>
          <p>Äter kött: {foundMonster.kost.allätare ? "Ja" : "Nej"}</p>
          <p>
            Allergier:{" "}
            {foundMonster.kost.allergier
              ? foundMonster.kost.allergier.join(", ")
              : "Nej"}
          </p>
          <br />
          <h4>Övrigt:</h4>
          <p>Intressen: {foundMonster.intressen.join(", ")}</p>
          <p></p>
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
