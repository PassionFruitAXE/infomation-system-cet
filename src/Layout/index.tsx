import Nav from "./Nav";
import { FC } from "react";
import { Layout as AntLayout } from "antd";

const { Header, Content } = AntLayout;

const Layout: FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <div>
      <AntLayout>
        <Header>
          <Nav />
        </Header>
        <Content>{children}</Content>
      </AntLayout>
    </div>
  );
};

export default Layout;
