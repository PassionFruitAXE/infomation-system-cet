import { createContext, FC, ReactElement, useContext, useState } from "react";

export type TUserContext = {
  userInfo: {
    token: string;
  };
  dispatch: (newState: any) => void;
  loginOut: () => void;
};

const defaultValue = {
  userInfo: {
    token: "",
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
  };
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
