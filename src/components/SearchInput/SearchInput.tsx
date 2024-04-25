import { useContext, useRef, useState } from "react";
import { monsterContext } from "../context/MonsterContext";
import { OneMonster } from "../../types/monsterTypes";
import { NavLink } from "react-router-dom";

const SearchInput = () => {
  const { state } = useContext(monsterContext);
  const [inputTerm, setInputTerm] = useState("");
  const [searchSuccessed, setSearchSuccessed] = useState<OneMonster[]>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    if (inputRef.current !== null) {
      const typedLetter = inputRef.current.value.trim().toLocaleLowerCase();
      setInputTerm(typedLetter);
    }
  };

  const handleClick = () => {
    const matchedSearchTerm = state.monster.filter((m) => {
      const fullname = m.förnamn + m.efternamn;

      return fullname.toLocaleLowerCase().includes(inputTerm);
    });

    setSearchSuccessed(matchedSearchTerm);
    setInputTerm("");
  };

  if (inputRef.current?.value == "") {
  }

  console.log("inputTerm ger, ", inputTerm);
  console.log("searchsuccess,", searchSuccessed);

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={inputTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Förnamn/efternamn..."
      />
      <button onClick={handleClick}>Sök</button>
      {searchSuccessed && (
        <div>
          {searchSuccessed.map((s: OneMonster) => {
            return (
              <NavLink
                key={s.id}
                to={`/sökmonster/${s.förnamn}-${s.efternamn}`}
              >
                <p>
                  {s.förnamn} {s.efternamn}
                </p>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
