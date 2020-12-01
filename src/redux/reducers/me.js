import * as MeActions from '../actions/me';

const initialState = ({
  me: null,
  meGithub: [],
});

export default function me(state = initialState, action) {
  switch (action.type) {
    case MeActions.ACTION_ME_GITHUB:
      return {
        ...state,
        meGithub: action.payload,
      }
    default:
      return state;
  }
}

export function getMeGithub(state) {
  console.log(state.me);
  return state.me.meGithub;
}