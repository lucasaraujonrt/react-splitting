import * as HomeActions from '../actions/home';

const initialState = ({
  home: [],
  homeData: [],
});

export default function home(state = initialState, action) {
  switch (action.type) {
    case HomeActions.ACTION_SAVE_INPUT_TEXT:
      return {
        ...state,
        homeData: action.payload,
      }
    default:
      return state;
  }
}

export function getHomeData(state) {
  console.log(state.home.homeData);
  return state.home.homeData;
}