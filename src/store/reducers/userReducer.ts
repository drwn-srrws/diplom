import { addAccessThemes_ } from "@/actions/user";
import { IUser, IAvailableThemes } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

interface UserState {
  currentUser: IUser;
  isAuth: boolean;
  passTest: number;
  isAlerted: boolean;
  isNewUser: boolean;
}

const initialState: UserState = {
  currentUser: {
    _id: "",
    email: "",
    userName: "",
    password: "",
    avatar: "",
    startTest: {
      isCompleted: false,
      score: 0,
    },
    availableThemes: [
      {
        themeName: "Вступ",
        themeUrl: "1Intodaction",
        themeTest: true,
        themeScore: 0,
        nextPage: false,
      },
    ],
  },
  isAuth: false,
  passTest: 0,
  isAlerted: false,
  isNewUser: false,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      localStorage.setItem("email", action.payload.currentUser.email);
      localStorage.setItem("password", action.payload.currentUser.password);
      localStorage.setItem("id", action.payload.currentUser._id);
      localStorage.setItem("avatar", action.payload.currentUser.avatar);
      localStorage.getItem("isAlerted") == undefined &&
        localStorage.setItem("isAlerted", "false");
      console.log(console.log(localStorage.getItem("avatar"), "1111111111"));
      state.currentUser = action.payload.currentUser;
      state.isAuth = true;

      state.isAlerted = false;
    },
    logout(state) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("id");
      localStorage.removeItem("avatar");
      localStorage.removeItem("isAlerted");
      state.isAuth = false;
      state.isAlerted = true;
      state.currentUser = {
        email: "",
        userName: "",
        password: "",
        avatar: "",
        startTest: {
          isCompleted: false,
          score: 0,
        },
        availableThemes: [
          {
            themeName: "",
            themeUrl: "",
            themeTest: true,
            themeScore: 0,
            nextPage: false,
          },
        ],

        _id: "",
      };
    },
    AddThemeAccess(state, action: PayloadAction<any>) {
      state.currentUser.availableThemes = [
        ...state.currentUser.availableThemes,
        action.payload,
      ];
    },
    addCompletedTest(state) {
      console.log("state.currentUser.test.push(true);");
      // state.currentUser.test.push(true);
    },
    passTestScore(state, action: PayloadAction<number>) {
      state.passTest = action.payload;
    },
    isAlertedTrue(state) {
      state.isAlerted = true;
    },
    isNewUser(state, action: PayloadAction<boolean>) {
      state.isNewUser = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const {
  setUser,
  AddThemeAccess,
  logout,
  addCompletedTest,
  passTestScore,
  isAlertedTrue,
  isNewUser,
} = UserSlice.actions;
// checkAuth(state) {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const decodedToken = jwt_decode(token) as any;
//     Auth_(decodedToken);
//     console.log(decodedToken);
//   }
// },
