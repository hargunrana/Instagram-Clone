import React from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";

function index() {
    return (
        <div class="signup-container">
            <div class="signup-card">
                <Image src={logo} width="200" alt="Instagram Logo" />
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
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </div>
        </div>
    );
}

export default index;
