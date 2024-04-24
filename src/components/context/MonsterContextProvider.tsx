import { useReducer } from "react";
import { initialMonsterState } from "../../types/monsterTypes";
import { monsterContext } from "./MonsterContext";
import { monsterReducer } from "./monsterReducer";

type MonsterContextProviderProps = {
  children: React.ReactNode;
};

const MonsterContextProvider = ({ children }: MonsterContextProviderProps) => {
  const [state, dispatch] = useReducer(monsterReducer, initialMonsterState);

  return (
    <monsterContext.Provider value={{ state, dispatch }}>
      {children}
    </monsterContext.Provider>
  );
};

export default MonsterContextProvider;
