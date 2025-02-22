import React from "react";
import { Button, Form, Input, Card, message } from "antd";
import { Link } from "react-router-dom";

type FieldType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const onFinish = (values: FieldType) => {
    const {confirmPassword, email, name, password, phone} = values
    if (confirmPassword !== password) {
      message.error('Mật khẩu không khớp.')
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Đăng ký" className="w-full max-w-md">
        <Form
          name="sign-up"
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
            label="SĐT"
            name="phone"
            rules={[{ required: true, message: "Nhập số điện thoại!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: "Nhập username!" }]}
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
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            rules={[{ required: true, message: "Xác nhận mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center mt-4">
          Đã có tài khoản?{" "}
          <Link to="/sign-in" className="text-blue-500">
            Đăng nhập
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;
