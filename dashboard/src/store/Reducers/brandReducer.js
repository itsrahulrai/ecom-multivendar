import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// =========================
// Add Brand
// =========================
export const brandAdd = createAsyncThunk(
  "brand/brandAdd",
  async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("image", formData.image);
      data.append("status", formData.status);

      const response = await api.post("/brand-add", data, {
        withCredentials: true,
      });

      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// =========================
// Get Brands
// =========================
export const getBrand = createAsyncThunk(
  "brand/getBrand",
  async ({ page, perPage, searchValue }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-brand", {
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

// =========================
// Update Brand
// =========================
export const brandUpdate = createAsyncThunk(
  "brand/brandUpdate",
  async ({ id, formData }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("status", formData.status);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const response = await api.put(`/brand-update/${id}`, data, {
        withCredentials: true,
      });

      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// =========================
// Delete Brand
// =========================
export const brandDelete = createAsyncThunk(
  "brand/brandDelete",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.delete(`/brand-delete/${id}`, {
        withCredentials: true,
      });

      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// =========================
// Slice
// =========================
const brandSlice = createSlice({
  name: "brand",

  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,

    brands: [],
    pagination: {},

    totalBrand: 0,
    totalPage: 0,
  },

  reducers: {
    clearMessages: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // =========================
      // Add Brand
      // =========================
      .addCase(brandAdd.pending, (state) => {
        state.loader = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(brandAdd.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })
      .addCase(brandAdd.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "Something went wrong";
      })

      // =========================
      // Get Brand
      // =========================
      .addCase(getBrand.pending, (state) => {
        state.loader = true;
        state.errorMessage = "";
      })
      .addCase(getBrand.fulfilled, (state, { payload }) => {
        state.loader = false;

        state.brands = payload.brands;
        state.pagination = payload.pagination;

        state.totalBrand = payload.pagination?.totalItems || 0;
        state.totalPage = payload.pagination?.totalPages || 0;
      })
      .addCase(getBrand.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "Something went wrong";
      })

      // =========================
      // Update Brand
      // =========================
      .addCase(brandUpdate.pending, (state) => {
        state.loader = true;
      })
      .addCase(brandUpdate.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })
      .addCase(brandUpdate.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "Something went wrong";
      })

      // =========================
      // Delete Brand
      // =========================
      .addCase(brandDelete.pending, (state) => {
        state.loader = true;
      })
      .addCase(brandDelete.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })
      .addCase(brandDelete.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.message || "Something went wrong";
      });
  },
});

export const { clearMessages } = brandSlice.actions;

export default brandSlice.reducer;