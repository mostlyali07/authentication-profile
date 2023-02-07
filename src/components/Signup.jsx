import "../App.css";
import React from "react";
import { Input, Form, Button } from "antd";
import Dev_img from "../images/right_img.png";
// import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="container my-5 background_main">
        <div className="female"></div>
        <div className="row MainDiv p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center left_div">
            <div>
              <h1 className="display-5 font-weight-bold">Sign Up</h1>
              <p className="display-9 mb-4">
                And enjoy life during the time just you saved
              </p>
              <div className="mb-5">
                <a href="/" className="btns">
                  <i className="fa-brands fa-google">&nbsp;</i>Sign Up with
                  Google
                </a>
                <a href="/" className="btns">
                  <i class="fa-brands fa-facebook">&nbsp;</i>Sign Up with
                  Facebook
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <Form.Item
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                      type: "text",
                    },
                  ]}
                  style={{
                    maxWidth: 200,
                  }}
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
                  style={{
                    maxWidth: 200,
                  }}
                >
                  <Input placeholder="info@example.com" />
                </Form.Item>
              </div>
              <Form.Item
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                style={{
                  maxWidth: 280,
                }}
              >
                <Input.Password placeholder="8+ Characters, 1 Capital letters" />
              </Form.Item>
              <Button className="Acc">Create an Account</Button>
              <p className="mt-5">
                Already have an account? <a href="/">Sign in</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={Dev_img} alt="Dev_img" width={500} />
          </div>
        </div>
        <div className="male"></div>
      </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/about" element={<div>About page</div>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
