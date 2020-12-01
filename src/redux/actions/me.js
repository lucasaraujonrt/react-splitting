import MeRequest from '../../api/me';

export const ACTION_ME_GITHUB = 'ACTION_ME_GITHUB';

export const getMe = (callback) => async (dispatch) => {
  try {
    const data = await MeRequest.meGithub();
    console.log('oq vem da api', data);
    await dispatch({
      type: ACTION_ME_GITHUB,
      payload: data,
    });

    if (callback && typeof callback === 'function') {
      callback(data);
    }

  } catch (error) {
    throw new Error('Ocorreu um erro', error);
  }
} 