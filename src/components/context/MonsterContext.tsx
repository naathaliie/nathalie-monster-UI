import { createContext, useContext } from "react";
import {
  InitialMonsterType,
  initialMonsterState,
} from "../../types/monsterTypes";
import { Action } from "./monsterReducer";

export const monsterContext = createContext<{
  state: InitialMonsterType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});
