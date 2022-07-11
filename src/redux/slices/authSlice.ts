import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: {email: string; password: string}, thunkAPI) => {
    try {
      const token = await AuthService.login(email, password);
      return token;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

type InitialState = {
  token: string | null;
  isAuthenticating: boolean;
  error: string | null;
};

const initialState: InitialState = {
  token: null,
  isAuthenticating: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload ?? null;
      state.isAuthenticating = false;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isAuthenticating = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload as string;
      state.token = null;
      state.isAuthenticating = false;
    });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
