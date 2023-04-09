import * as CONSTANTS from "./constants";

const initialState = {
  toggleValue: false,
};

export default function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.SET_TOGGLE_VALUE:
      return { ...state, toggleValue: !state.toggleValue };
    default:
      return state;
  }
}
