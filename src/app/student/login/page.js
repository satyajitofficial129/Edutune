import Link from 'next/link'
import React from 'react'

const StudentLogin = () => {
    return (
        <div className="page-center" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <div className="page-center-in">
                <div className="container-fluid">
                    <h3 className="text-center header-title">
                        <Link href="/" legacyBehavior>
                        <a>EduTune International</a>
                        </Link>
                    </h3>
                    <form
                        method="POST"
                        action="https://edutune.com.bd/student/login"
                        acceptCharset="UTF-8"
                        className="sign-box"
                        id="login-form"
                    >
                        <input
                            name="_token"
                            type="hidden"
                            defaultValue="plTyTh77tKbiZ2JhAE2jvIWqEa4Kt3HOIMhGYcgX"
                        />
                        <input
                            name="_token_two"
                            type="hidden"
                            defaultValue="eyJpdiI6IjhrWkMyQXg5RVBiZUFOOWtZN21HdXc9PSIsInZhbHVlIjoiNHZsM2xaMERicHh0SWNJcGlXVy9YZz09IiwibWFjIjoiZDQ5YzI0NDJjMzMwMjUyZTg3ODQ0ZjM4ZmY0NmE5NjM1ZGE4OTE2MWU0NzYxMGU1NGU1Mjc1N2IyOTZiOGI3YyIsInRhZyI6IiJ9"
                        />
                        <div className="sign-avatar">
                            <img
                                src="/images/17120317122053340422660b87e04012c.jpg"
                                alt=""
                            />
                        </div>
                        <header className="sign-title">Student Login</header>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone or Email"
                                name="email"
                                defaultValue=""
                                required=""
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                defaultValue=""
                                name="password"
                                required=""
                            />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="captcha"
                                        placeholder="Captcha"
                                        id="captcha"
                                        className="form-control no-border"
                                        maxLength={6}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="float-left reset">
                                <a style={{ fontSize: "16px !important" }} href="registration.html">
                                    Sign Up
                                </a>
                            </div>
                            <div className="float-right reset">
                                <a
                                    style={{ fontSize: "16px !important" }}
                                    href="forget-password.html"
                                >
                                    Reset password
                                </a>
                            </div>
                        </div>
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </form>
                </div>
                <div className="text-center" style={{ paddingTop: 10, color: "#666666" }}>
                    <small className="text-muted"></small>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin