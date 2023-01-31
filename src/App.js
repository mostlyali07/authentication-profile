import "./App.css";
import React from "react";
import { Input, Form, Button } from "antd";
import Dev_img from "./images/dev_img.png";

export default function SignUp() {
  return (
    <>
      <div className="container my-5 background_main">
        <div className="row MainDiv p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center left_div">
            <div>
              <h1 className="display-5 font-weight-bold">Sign Up</h1>
              <p className="display-9 mb-4">And enjoy life during the time just you saved</p>
              <div className="mb-5">
                <a href="/" className="btns"><i className="fa-brands fa-google">&nbsp;</i>Sign Up with Google</a>
                <a href="/" className="btns"><i class="fa-brands fa-facebook">&nbsp;</i>Sign Up with Facebook</a>
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
                <Input placeholder="Enter Your Full Name" />
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
              <p className="mt-5">Already have an account? <a href="/">Sign in</a></p>
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
