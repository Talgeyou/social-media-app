import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { connect } from "react-redux";
import { logInThunkCreator } from "../../../redux/authReducer";

interface Props {
  logIn: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginForm = ({ logIn }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogInButtonClick = () => {
    logIn(email, password, rememberMe);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          >
            Remember me
          </Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          onClick={handleLogInButtonClick}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, { logIn: logInThunkCreator })(LoginForm);
