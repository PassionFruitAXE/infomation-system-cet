import { FC } from "react";
import { Outlet } from "react-router-dom";

const Account: FC = () => {
  return (
    <div className="flex pt-36 flex-col items-center h-screen">
      <div className="shadow-md inline-block">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
