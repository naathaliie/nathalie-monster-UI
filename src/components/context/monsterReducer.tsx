import { GlobalMonsterState } from "../../types/monsterTypes";

export type Action =
  | { type: typeof ACTIONS.ADD; payload: string }
  | { type: typeof ACTIONS.REMOVE; payload: number };

export const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

export const monsterReducer = (state: GlobalMonsterState, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return state;

    case ACTIONS.REMOVE:
      console.log("Du kom till actions.remove");
      return {
        ...state,
        monster: state.monster.filter(
          (monster) => monster.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
