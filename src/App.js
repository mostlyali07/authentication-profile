import React from "react";
import { Input, Form } from "antd";
import Dev_img from "./images/dev_img.png";

export default function Hello() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Sign Up</h1>
            <p>And enjoy life during the time just you saved</p>
            <div>
              <a href="/">Sign Up with Google</a>
              <a href="/">Sign Up with Facebook</a>
            </div>
            <Form.Item label="Email">
              <Input.Email />
            </Form.Item>
            <Form.Item
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <img src={Dev_img} alt="Dev_img" />
          </div>
        </div>
      </div>
    </>
  );
}
