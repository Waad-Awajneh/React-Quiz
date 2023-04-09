import * as CONSTANTS from "./constants";

export const setToggleValue = () => (dispatch) => {
  dispatch({ type: CONSTANTS.SET_TOGGLE_VALUE });
};
