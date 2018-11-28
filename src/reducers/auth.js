type User = { firstName: string, lastName: string };
type State = Array<User>;
type Action = { type: string, payload?: User };

const auth = (state: State = [], action: Action): any => {
  switch (action.type) {
    case 'LOGGED_IN':
      return [
        ...state,
        {
          text: 'logged id',
        }
      ]
    case 'LOGGED_OUT':
      return [
        ...state,
        {
          text: 'logged out',
        }
      ]
    default:
      return state
  }
};

export default auth;
