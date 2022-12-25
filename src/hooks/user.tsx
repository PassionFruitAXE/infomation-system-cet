import { createContext, FC, ReactElement, useContext, useState } from "react";
import { getItem, removeItem } from "@/utils/storage";
import { user } from "@/api";

export type TUserContext = {
  userInfo: {
    name: string;
    email: string;
    examineeIdNumber: string;
  };
  dispatch: (newState: any) => void;
  loginOut: () => void;
};

const defaultValue = {
  userInfo: {
    name: "",
    email: "",
    examineeIdNumber: "",
  },
  dispatch: () => void 0,
  loginOut: () => void 0,
};

export const UserContext = createContext<TUserContext>(defaultValue);

export const UserProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<TUserContext["userInfo"]>(
    defaultValue.userInfo
  );

  const dispatch = (newState: TUserContext["userInfo"]) => {
    setUserInfo({ ...userInfo, ...newState });
  };

  const loginOut = () => {
    setUserInfo(defaultValue.userInfo);
    removeItem("token");
  };

  if (
    (userInfo.name === "" || userInfo.email === "") &&
    getItem("token") != ""
  ) {
    user.getUserInfo().then(response => {
      dispatch({
        name: response.data.data.examineeName,
        email: response.data.data.mail,
        examineeIdNumber: response.data.data.examineeIdNumber,
      });
    });
  }
  return (
    <UserContext.Provider
      value={{
        userInfo: userInfo,
        dispatch,
        loginOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => {
  const { userInfo, dispatch, loginOut } = useContext(UserContext);
  return { userInfo, dispatch, loginOut };
};
