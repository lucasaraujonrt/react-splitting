export const ACTION_SAVE_INPUT_TEXT = 'ACTION_SAVE_INPUT_TEXT';


export const saveInputText = (payload) => async (dispatch) => {
  console.log(payload)
  dispatch({
    type: ACTION_SAVE_INPUT_TEXT,
    payload,
  });
}