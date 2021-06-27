import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { NavLink } from "react-router-dom";

export interface NavigationProps {
  userId: number;
  path: string;
}

const Navigation = (props: NavigationProps) => {
  return (
    <Sider theme="light" width={200}>
      <Menu mode="inline" defaultSelectedKeys={[`${props.path}`]}>
        <Menu.Item key="profile">
          <NavLink to={`/profile/${props.userId}`}>Profile</NavLink>
        </Menu.Item>
        <Menu.Item key="messages">
          <NavLink to="/dialogs">Messages</NavLink>
        </Menu.Item>
        <Menu.Item key="users">
          <NavLink to="/users">Find Users</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;
