import React from "react";
import { Button, Form, Input, Card } from "antd";
import { Link } from "react-router-dom"; // Inside the Card component, after the Form

type FieldType = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Đăng nhập" className="w-full max-w-md">
        <Form
          name="sign-in"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Nhập email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center mt-4">
          Chưa có tài khoản?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Đăng ký
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignIn;
