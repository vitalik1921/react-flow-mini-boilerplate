export function login(): any {
  return (dispatch) => dispatch({ type: "LOGGED_IN"});
}

export function logout(): any {
  return (dispatch) => dispatch({ type: "LOGGED_OUT"});
}
