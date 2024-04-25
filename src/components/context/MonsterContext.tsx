import { createContext } from "react";
import { OneMonster, initialMonsterState } from "../../types/monsterTypes";
import { Action } from "./monsterReducer";
// Skapar en context för att hantera tillstånd
export const monsterContext = createContext<{
  state: OneMonster[]; // state är en array av OneMonster-objekt
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsterState.monster, // Inledande tillstånd
  dispatch: () => null, // Standardfunktion som inte gör något
});
