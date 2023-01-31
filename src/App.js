import "./App.css";
import React from "react";
import { Input, Form, Button } from "antd";
import Dev_img from "./images/dev_img.png";

export default function SignUp() {
  return (
    <>
      <div className="container my-5 background_main">
        <div className="row MainDiv">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1>Sign Up</h1>
              <p>And enjoy life during the time just you saved</p>
              <div>
                <a href="/" className="btns"><i className="fa-brands fa-google"></i> Sign Up with Google</a>
                <a href="/" className="btns">Sign Up with Facebook</a>
              </div>
              <Form.Item
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                    type: "text",
                  },
                ]}
              >
                <Input placeholder="Example" />
              </Form.Item>
              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="info@example.com" />
              </Form.Item>
              <Form.Item
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="8+ Characters, 1 Capital letters" />
              </Form.Item>
              <Button>Create an Account</Button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={Dev_img} alt="Dev_img" />
          </div>
        </div>
      </div>
    </>
  );
}
