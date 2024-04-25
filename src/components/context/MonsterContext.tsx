import { createContext } from "react";
import {
  GlobalMonsterState,
  initialMonsterState,
} from "../../types/monsterTypes";
import { Action } from "./monsterReducer";
// Skapar en context för att hantera tillstånd
export const monsterContext = createContext<{
  state: GlobalMonsterState; // den initiala typen
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState, // Det initiala värdet
  dispatch: () => null, // Standardfunktion som inte gör något
});
