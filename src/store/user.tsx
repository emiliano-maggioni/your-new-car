import { createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';
import { defState } from 'utility/Types';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
    },
  },
});

export default slice.reducer

// Actions
const { loginSuccess, logoutSuccess } = slice.actions
export const login = ({ username, password }:any) => async (dispatch:any) => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e:any) {
    return console.error(e.message);
  }
}
export const logout = () => async (dispatch:any) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess("wef")) 
  } catch (e:any) {
    return console.error(e.message);
  }
}