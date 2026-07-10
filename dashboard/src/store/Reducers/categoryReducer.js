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

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Category Update
export const categoryUpdate = createAsyncThunk(
    "category/categoryUpdate",
    async ({id,formData},{rejectWithValue,fulfillWithValue})=>{
        try{
            const data = new FormData();
            data.append("name",formData.name);
            data.append("status",formData.status);
            if(formData.image){
                data.append("image",formData.image);
            }
            const response = await api.put(
                `/category-update/${id}`,
                data,
                {
                    withCredentials:true
                }
            );
            return fulfillWithValue(response.data);

        }catch(error){

            return rejectWithValue(error.response.data);
        }
    }
);

// Category Delete

export const categoryDelete = createAsyncThunk(
    "category/categoryDelete",
    async(id,{rejectWithValue,fulfillWithValue})=>{
        try{
            const response = await api.delete(
                `/category-delete/${id}`,
                {
                    withCredentials:true
                }
            );
            return fulfillWithValue(response.data);
        }catch(error){

            return rejectWithValue(error.response.data);
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
  pagination: {},
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

    // Update
      .addCase(categoryUpdate.pending,(state)=>{
          state.loader = true;
      })
      .addCase(categoryUpdate.fulfilled,(state,{payload})=>{
          state.loader = false;
          state.successMessage = payload.message;
      })
      .addCase(categoryUpdate.rejected,(state,{payload})=>{
          state.loader = false;
          state.errorMessage = payload?.error;
      })

      // Delete
      .addCase(categoryDelete.pending,(state)=>{
          state.loader = true;
      })
      .addCase(categoryDelete.fulfilled,(state,{payload})=>{
          state.loader = false;
          state.successMessage = payload.message;
      })
      .addCase(categoryDelete.rejected,(state,{payload})=>{
          state.loader = false;
          state.errorMessage = payload?.error;
      })
      
    // Get Categories
    .addCase(getCategory.pending, (state) => {
      state.loader = true;
      state.errorMessage = "";
    })
    .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.loader = false;

        state.categorys = payload.categorys;
        state.pagination = payload.pagination;

        // Optional (for backward compatibility)
        state.totalCategory = payload.pagination.totalItems;
        state.totalPage = payload.pagination.totalPages;
      })
    .addCase(getCategory.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.message || "Something went wrong";
    });
}
});

export const { clearMessages } = categoryReducer.actions;
export default categoryReducer.reducer;
