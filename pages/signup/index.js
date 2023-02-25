import React from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Footer from "@/components/Footer";

function index() {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-card">
                    <Image src={logo} width="200" alt="Instagram Logo" />
                    <div
                        style={{
                            fontSize: "large",
                            color: "grey",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                        }}
                    >
                        Sign up to see photos and videos from your friends.
                    </div>
                    {/* <p> </p> */}
                    <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="dense"
                    />
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
                    <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        startIcon={<CloudUploadOutlinedIcon />}
                        style={{ marginTop: "0.5rem" }}
                    >
                        Upload Profile Photo
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>

                    <div style={{ marginTop: "1rem", color: "grey" }}>
                        People who use our service may have uploaded your
                        contact information to Instagram. Learn more
                    </div>
                    <div style={{ marginTop: "1rem", color: "grey" }}>
                        By signing up, you agree to our Terms, Privacy policy
                        and Cookies policy.
                    </div>
                    <Button
                        variant="contained"
                        fullWidth
                        style={{ marginTop: "1rem" }}
                    >
                        Sign-Up
                    </Button>
                </div>
                <div className="bottom-card">
                    Have an Account ?
                    <span
                        style={{
                            color: "#1e87db",
                            marginLeft: "5px",
                            fontWeight: "bold",
                        }}
                    >
                        Log in
                    </span>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default index;
