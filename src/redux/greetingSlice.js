import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
};

export const receiveMessage = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const message = await fetch('http://localhost:4000/random_greeting', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    return message.greeting;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [receiveMessage.fulfilled]: (state, action) => ({
      ...state,
      greeting: action.payload,
    }),
  },
});

export default greetingSlice.reducer;
