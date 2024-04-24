import { InitialMonsterType } from "../../types/monsterTypes";

export type Action =
  | { type: typeof ACTIONS.ADD; payload: string }
  | { type: typeof ACTIONS.REMOVE; payload: string };

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

export const monsterReducer = (state: InitialMonsterType, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return state;

    default:
      return state;
  }
};
