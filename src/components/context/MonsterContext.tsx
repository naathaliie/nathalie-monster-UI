import { createContext } from "react";
import {
  InitialMonsterType,
  initialMonsterState,
} from "../../types/monsterTypes";
import { Action } from "./monsterReducer";
// Skapar en context för att hantera tillstånd
export const monsterContext = createContext<{
  state: InitialMonsterType; // state är en array av OneMonster-objekt
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState, // Inledande tillstånd
  dispatch: () => null, // Standardfunktion som inte gör något
});
