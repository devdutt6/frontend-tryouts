import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => res.data)
})

const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false,
      state.data = action.payload,
      state.error = ''
    }),
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false,
      state.data = [],
      state.error = action.error.message
    })
  }
})



export default user.reducer
export const userAction = user.actions
export { fetchUsers }