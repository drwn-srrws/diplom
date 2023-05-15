import { IThemeMode } from "../../types/themeMode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ThemeModeState {
  themeMode: IThemeMode;
}

const initialState: ThemeModeState = {
  themeMode: { themeMode: "light" },
};

export const ThemeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    SwapTheme(state) {
      state.themeMode.themeMode === "light" ? "dark" : "light";
    },
  },
});

export default ThemeModeSlice.reducer;
export const { SwapTheme } = ThemeModeSlice.actions;
