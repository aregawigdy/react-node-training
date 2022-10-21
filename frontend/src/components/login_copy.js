import React, { useContext, useState, Component } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { AccountContext } from "./AccountContext";
const Login = () => {
    const { setUser } = useContext(AccountContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit = {(values, actions) => {
                const vals = { ...values };
                actions.resetForm();
                fetch("http://localhost:4000/auth/login",{
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(vals),
                })
                .catch(err =>{
                    return;
                })
                .then(res =>{
                    if (!res || !res.ok || res.status >= 400) {
                        return;
                    }
                    return res.json();
                })
                .then(data =>{
                    if (!data) return;
                    setUser({ ...data });
                    if (data.status) {
                        setError(data.status);
                    } else if (data.loggedIn) {
                        navigate("/home");
                    }
                })
            }}
        >
        
        <div className="account-pages my-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary">
                                <div className="text-primary text-center p-4">
                                <h5 className="text-white font-size-20">Analysis Portal</h5>
                                <p className="text-white-50">お客様のアカウントを使用</p>
                                <a href="index.php" className="logo logo-admin">
                                <img src="assets/images/alt_logo.png" alt height={24} />
                                </a>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <form className="form-horizontal mt-4" action="index.php" method="POST">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="email" className="form-control" id="username" name="username" placeholder="Enter username" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <input type="password" className="form-control" id="userpassword" name="password" placeholder="Enter password" required />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Remember
                                                    me</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
                                        <div className="form-group mt-2 mb-0 row">
                                            <div className="col-12 mt-4">
                                                <a href="#"><i className="mdi mdi-lock" /> Forgot your
                                                password?</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>Don't have an account ? <a href="#" className="font-weight-medium text-primary">
                                Signup now </a> </p>
                            <p className="mb-0"> © Copyright 
                                <a href = "https://altenergy.co.jp/" target="_blank"> Altenergy, Inc.</a> <span className="d-none d-sm-inline-block"> All Rights Reserved 2022.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Formik>
    );
};

export default Login;