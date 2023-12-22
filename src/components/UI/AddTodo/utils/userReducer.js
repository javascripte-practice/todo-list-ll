import { FIRST_NAME, LAST_NAME, AGE, RESET_USER } from "./contants";
import { initialUser } from "./initialData";

export const userReducer = (state, action) => {
  switch (action?.type) {
    case FIRST_NAME:
      const errF = action?.payload.length < 3;
      return {
        ...state,
        firstName: {
          val: action?.payload,
          err: errF ? true : false,
          succ: !errF ? true : false,
        },
      };
    case LAST_NAME:
      const errL = action?.payload.length < 5;
      return {
        ...state,
        lastName: {
          val: action?.payload,
          err: errL ? true : false,
          succ: !errL ? true : false,
        },
      };
    case AGE:
      const errA = +action?.payload < 15;
      return {
        ...state,
        age: {
          val: action?.payload,
          err: errA ? true : false,
          succ: !errA ? true : false,
        },
      };
    case RESET_USER:
      return initialUser;
    default:
      return state;
  }
};
