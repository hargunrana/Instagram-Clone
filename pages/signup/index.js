/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AuthContext } from "@/context/Auth";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function index() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const { signUp } = useContext(AuthContext);

    const handleSignUp = async () => {
        try {
            setLoading(true);
            setError("");
            const userInfo = await signUp(email, password);
            console.log(file);
            // uploading profile picture to Cloud Storage

            const storageRef = ref(
                storage,
                `${userInfo.user.uid}/profile-picture`
            );
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    console.log(error);
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            console.log("File available at", downloadURL);
                        }
                    );
                }
            );

            console.log("user signed up");
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
        setLoading(false);
    };
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

                    <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="dense"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        disabled={loading}
                    />
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
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="password"
                        margin="dense"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        startIcon={<CloudUploadOutlinedIcon />}
                        style={{ marginTop: "0.5rem" }}
                        disabled={loading}
                    >
                        Upload Profile Photo
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                    </Button>
                    {/* shows error is login fails*/}

                    {error != "" && <div style={{ color: "red" }}>{error}</div>}
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
                        onClick={handleSignUp}
                        disabled={loading}
                    >
                        Sign-Up
                    </Button>
                </div>
                <div className="bottom-card">
                    Have an Account ?
                    <Link href="/login">
                        <span
                            style={{
                                color: "#1e87db",
                                marginLeft: "5px",
                                fontWeight: "bold",
                            }}
                        >
                            Log in
                        </span>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default index;
