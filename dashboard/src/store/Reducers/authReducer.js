import {createSlice} from '@reduxjs/toolkit';



export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    SuccessMessage:'',
    ErrorMessage:'',
    loader:false,
    userInfo:'',
  },

  reducers: {

  },
  extraReducers: () => {

  }
  
})

export default authReducer.reducer;

