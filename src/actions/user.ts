import { useAppDispatch } from "@/hooks/redux";
import { isNewUser, setUser } from "@/store/reducers/userReducer";
import { AppDispatch } from "@/store/store";
import { IAvailableThemes, IStartTest } from "@/types/user";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { NavigateFunction } from "react-router-dom";

const PORT = "https://39b0-93-76-59-214.ngrok-free.app";

export const Registration_ = async (
  email: string,
  password: string,
  userName: string,
  router: any,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!email || !password || !userName) return alert("fill empty fields");
    if (!EMAIL_REGEXP.test(email)) {
      return alert(`Enter correct email`);
    }

    const passw = /^[A-Za-z]\w{7,14}$/;
    if (!password.match(passw)) {
      return alert(`Enter correct password`);
    }

    const response = await axios.post(`${PORT}/api/user/registration`, {
      email,
      password,
      userName,
    });
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("password", response.data.password);
    localStorage.setItem("id", response.data._id);
    dispatch(isNewUser(true));
    router.push("/");
  } catch (e) {
    if ((e as AxiosError)?.response?.status === 400) {
      alert(`User with email ${email} already exists`);
    } else {
      console.log(e);
    }
  }
};

export const Login_ = async (
  email: string,
  password: string,
  dispatch: AppDispatch,

  router: any
  //route: string
): Promise<void> => {
  try {
    const response = await axios.post(`${PORT}/api/user/login`, {
      email,
      password,
    });
    if (!email) {
      return;
    }
    console.log(response, "response");
    dispatch(setUser(response.data));
    if (
      location.pathname === "/autorization/login" ||
      location.pathname === "/autorization"
    ) {
      router.push("/");
    }
  } catch (e) {
    console.error(e);
  }
};

export const addAccessThemes_ = async (
  userId: string,
  availableThemes: IAvailableThemes[]
): Promise<void> => {
  try {
    await axios.put(`${PORT}/api/user/addAccessThemes/${userId}`, {
      availableThemes,
    });
  } catch (e) {
    console.error(e);
  }
};
export const updateThemeScore_ = async (
  userId: string,
  themeName: string,
  themeScore: number
): Promise<void> => {
  try {
    await axios.put(
      `${PORT}/api/user/updateThemeScore/${userId}/${themeName}`,
      {
        themeScore,
      }
    );
  } catch (e) {
    console.error(e);
  }
};

export const updateUserName_ = async (
  userId: string,
  userName: string
): Promise<void> => {
  try {
    console.log(userName, "UserNameUserNameUserNameUserNameUserName");
    await axios.put(`${PORT}/api/user/updateUserName/${userId}`, {
      userName,
    });
  } catch (e) {
    console.error(e);
  }
};

export const addStartTest_ = async (
  userId: string,
  startTest: IStartTest
): Promise<void> => {
  console.log(startTest, "startTest");
  try {
    await axios.put(`${PORT}/api/user/addStartTest/${userId}`, {
      startTest,
    });
  } catch (e) {
    console.error(e);
  }
};

export const updateIsWelcome = async (
  userId: string,
  isWelcome: boolean
): Promise<void> => {
  try {
    console.log(isWelcome, "availableThemes11111");
    await axios.put(`${PORT}/api/user/updateIsWelcome/${userId}`, {
      isWelcome,
    });
  } catch (e) {
    console.error(e);
  }
};

export const uploadAvatar_ = async (
  userId: string,
  avatar: string
): Promise<void> => {
  try {
    console.log(avatar, "availableThemes11111");
    await axios.post(`${PORT}/api/user/uploadAvatar/${userId}`, { avatar });
  } catch (e) {
    console.error(e);
  }
};
// export const Auth_ = async (_id: string): Promise<void> => {
//   try {
//     const response = await axios.post(
//       `${PORT}/api/user/auth`,
//       {
//         _id,
//       }
//     );

//     console.log(response.data);
//   } catch (e) {
//     alert(e + "lol");
//   }
// };

// export const Login_ = async () => {
//   try {
//     const response = await axios.post(
//       `${PORT}/api/user/login`,
//       {
//         email,
//         password,
//       }
//     );
//     // console.log(response);
//     // const userData = response.data;
//     // const currentUser = { ...userData };
//     dispatch(setUser(response.data));
//     console.log(response.data.token);
//     console.log("response.data.token");
//     localStorage.setItem("token", response.data.token);
//   } catch (e) {
//     alert(e + "lol");
//   }
// };

// export const auth = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:8000/api/auth", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       dispatch(setUser(response.data.user));
//       localStorage.setItem("token", response.data.token);
//     } catch (e) {
//       alert(e);
//       localStorage.removeItem("token");
//     }
//   };
// };
