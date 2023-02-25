import React from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import iPhone from "../../assets/iPhone.png";
import Footer from "@/components/Footer";

function index() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="iphone-image"></div>

                <div className="login-form">
                    <div className="login-card">
                        <Image src={logo} width="200" alt="Instagram Logo" />

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            type="password"
                            margin="dense"
                        />
                        <div style={{ marginTop: "0.5rem", color: "#1e87db" }}>
                            Forgotten Password ?
                        </div>
                        <Button
                            variant="contained"
                            fullWidth
                            style={{ marginTop: "1.5rem" }}
                        >
                            Log In
                        </Button>
                    </div>
                    <div className="login-bottom-card">
                        Dont have an Account ?
                        <span style={{ color: "#1e87db", fontWeight: "bold" }}>
                            {" "}
                            Sign-up
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default index;
