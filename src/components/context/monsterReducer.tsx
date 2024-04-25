import { InitialMonsterType } from "../../types/monsterTypes";

export type Action =
  | { type: typeof ACTIONS.ADD; payload: string }
  | { type: typeof ACTIONS.REMOVE; payload: number };

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

export const monsterReducer = (state: InitialMonsterType, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return state;

    case ACTIONS.REMOVE:
      console.log("Du kom till actions.remove");
      return {
        monster: state.monster.filter((m) => {
          return m.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
