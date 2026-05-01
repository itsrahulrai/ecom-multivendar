import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api/api"
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/admin/login', info, { withCredentials: true })
      localStorage.setItem('accessToken',data.token)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
  },

 reducers: {
  clearMessages: (state) => {
    state.errorMessage = '';
    state.successMessage = '';
  }
},

  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.errorMessage = '';
      })

      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload;
        state.successMessage = 'Login successful';
      })

      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error || payload?.message || "Login failed";
      });
  }
});

export const { clearMessages } = authReducer.actions;
export default authReducer.reducer;

