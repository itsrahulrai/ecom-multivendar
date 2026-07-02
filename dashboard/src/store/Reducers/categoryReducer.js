import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api/api"

export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("image", formData.image);
      data.append("status", formData.status);

      const response = await api.post("/category-add", data, {
        withCredentials: true,
      });

      console.log(response.data);

      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response?.data);
    }
  }
);






export const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    categorys:[],
},

 reducers: {
  clearMessages: (state) => {
    state.errorMessage = '';
    state.successMessage = '';
  }
},

  extraReducers: (builder) => {
    builder
      .addCase(categoryAdd.pending, (state) => {
        state.loader = true;
      })

     .addCase(categoryAdd.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        })

        .addCase(categoryAdd.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "Something went wrong";
        })
    
  }
});

export const { clearMessages } = categoryReducer.actions;
export default categoryReducer.reducer;

