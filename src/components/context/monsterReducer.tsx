import { GlobalMonsterState } from "../../types/monsterTypes";

export type Action =
  | { type: 'ADD'; payload: string }
  | { type:  'REMOVE'; payload: number };


export const monsterReducer = (state: GlobalMonsterState, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return state;

    case 'REMOVE':
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
