import { Tabs } from "antd";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigator = useNavigate();
  return (
    <div className="flex pt-36 flex-col items-center h-screen">
      <div className="shadow-md inline-block p-4 w-2/3">
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
