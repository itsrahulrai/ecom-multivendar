import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api/api"

// Add Category
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

      // console.log(response.data);

      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response?.data);
    }
  }
);

// get All Category
export const getCategory  = createAsyncThunk(
  "category/getCategory",
  async ({ page, perPage, searchValue }, { rejectWithValue, fulfillWithValue }) => {
    try {
     const { data } = await api.get("/get-category", {
        params: {
          page,
          perPage,
          searchValue,
        },
        withCredentials: true,
      });
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const categoryReducer = createSlice({
  name: 'category',
  initialState: {
  successMessage: "",
  errorMessage: "",
  loader: false,

  categorys: [],
  totalCategory: 0,
  totalPage: 0,
},

 reducers: {
  clearMessages: (state) => {
    state.errorMessage = '';
    state.successMessage = '';
  }
},

extraReducers: (builder) => {
  builder
    // Add Category
    .addCase(categoryAdd.pending, (state) => {
      state.loader = true;
      state.successMessage = "";
      state.errorMessage = "";
    })
    .addCase(categoryAdd.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    })
    .addCase(categoryAdd.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.message || "Something went wrong";
    })

    // Get Categories
    .addCase(getCategory.pending, (state) => {
      state.loader = true;
      state.errorMessage = "";
    })
    .addCase(getCategory.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.categorys = payload.categories;
      state.totalCategory = payload.totalCategory;
      state.totalPage = payload.totalPage;
    })
    .addCase(getCategory.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.message || "Something went wrong";
    });
}
});

export const { clearMessages } = categoryReducer.actions;
export default categoryReducer.reducer;
