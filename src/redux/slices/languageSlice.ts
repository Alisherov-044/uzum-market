import { Language } from "@/types/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.lang = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
