import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { text: '' },
  reducers: {
    setGreeting: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
