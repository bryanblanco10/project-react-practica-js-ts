import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { type AxiosResponse, type AxiosError } from 'axios';
import { type Dispatch } from '../../store';
export interface AuthState {
  accessToken: string | null;
  loading: boolean;
}

export interface Login {
  email: string;
  password: string;
}

const initialState: AuthState = {
  accessToken: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setAccessToken, setLoading } = authSlice.actions;
export default authSlice.reducer;

export const login = async (
  data: Login,
  dispatch: Dispatch
): Promise<AxiosResponse | AxiosError> => {
  dispatch(setLoading(true));
  try {
    const result: AxiosResponse = await axios.post('/login', data);
    dispatch(setAccessToken(result.data.token));
    return result;
  } catch (error) {
    return error as AxiosError;
  } finally {
    dispatch(setLoading(false));
  }
};
