/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import Footer from "@/components/Footer";
import { AuthContext } from "../../context/Auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Link from "next/link";

function index() {
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { forgotPassword } = useContext(AuthContext);

    let handleResetPassword = async () => {
        try {
            setLoading(true);
            setError("");

            await forgotPassword(email);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
        // setSuccess(true);
    };
    return (
        <div className="forgot-page">
            <div className="insta-navbar">
                <Link href="/">
                    <Image
                        src={logo}
                        width="150"
                        style={{ marginTop: "0.75rem", marginLeft: "15rem" }}
                        alt="Instagram Logo"
                    />
                </Link>
            </div>
            <div className="forgot-container">
                <div className="forgot-form">
                    <div className="forgot-card">
                        <div className="lock-icon">
                            <LockOutlinedIcon
                                style={{ fontSize: "60px", marginTop: "1rem" }}
                            />
                        </div>
                        {/* <div className="circle">
                            <CircleOutlinedIcon />
                        </div> */}
                        <div
                            style={{
                                color: "#black",
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                                padding: "1rem",
                            }}
                        >
                            {" "}
                            Trouble with Logging in?
                        </div>

                        <div style={{ marginTop: "1rem", color: "grey" }}>
                            Enter your email address, phone number or username,
                            and we'll send you a link to get back into your
                            account.
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="dense"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />

                        {/* shows error is login fails*/}

                        {error != "" && (
                            <div style={{ color: "red" }}>{error}</div>
                        )}
                        {/* shows success when link sent */}
                        {success && (
                            <div style={{ color: "#1e87db" }}>
                                Password Reset Link is sent
                            </div>
                        )}

                        <Button
                            variant="contained"
                            fullWidth
                            style={{ marginTop: "1.5rem" }}
                            onClick={handleResetPassword}
                            disabled={loading}
                        >
                            Send Reset Link
                        </Button>

                        <div className="divider">
                            <div className="line"></div>
                            OR
                            <div className="line"></div>
                        </div>
                        <Link href="/signup">
                            <div className="link-text"> Create New Account</div>
                        </Link>
                    </div>
                    <div className="forgot-bottom-card">
                        <Link href="/login">
                            <div className="link-text"> Back to Login</div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default index;
