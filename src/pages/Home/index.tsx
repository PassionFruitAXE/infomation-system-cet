import { useUserInfo } from "@/hooks/user";
import { Tabs } from "antd";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigator = useNavigate();
  const {
    userInfo: { name },
    loginOut,
  } = useUserInfo();
  return (
    <div className="flex py-36 flex-col items-center min-h-screen">
      <div className="shadow-md inline-block p-4 w-2/3">
        <span className="pr-4">欢迎你, {name}</span>
        <a
          onClick={() => {
            loginOut();
            navigator("/");
          }}
          href="#"
          className="whitespace-nowrap text-base font-medium text-indigo-500 hover:text-indigo-600"
        >
          登出
        </a>
        <Tabs
          defaultActiveKey="1"
          onChange={key => {
            navigator(key);
          }}
          items={[
            {
              label: `主页`,
              key: "/home",
            },
            {
              label: `编辑信息`,
              key: "/home/edit",
            },
          ]}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
