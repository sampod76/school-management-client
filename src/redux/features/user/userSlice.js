const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const createUser = createAsyncThunk("user/createUser", async () => {});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
