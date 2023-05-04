/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import Footer from "@/components/Footer";
import { Carousel } from "react-responsive-carousel";
import CarouselImages from "@/components/getCarouselImages";
import { AuthContext } from "../../context/Auth";
import { useRouter } from "next/router";
import Link from "next/link";

function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { login, user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            //route to feed page
            router.push("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    let handleLogIn = async () => {
        try {
            console.log("Email:" + email);
            console.log("Password:", +password);
            setLoading(true);
            setError("");
            await login(email, password);
            console.log("logged in");
        } catch (err) {
            console.log(err.message);
            setError(err.message);

            setTimeout(() => setError(""), 2000);
        }
        setLoading(false);
    };
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="iphone-image">
                    <div className="carousel">
                        <Carousel
                            infiniteLoop
                            autoPlay
                            showArrows={false}
                            showIndicators={false}
                            interval={5000}
                            showStatus={false}
                            showThumbs={false}
                        >
                            {CarouselImages.map((image) => (
                                <Image
                                    src={image}
                                    alt="image"
                                    key={image.index}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>

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

                        {/* shows error is login fails*/}

                        {error != "" && (
                            <div style={{ color: "red" }}>{error}</div>
                        )}
                        <Link href="/forgot-password">
                            <div
                                style={{
                                    marginTop: "0.5rem",
                                    color: "#1e87db",
                                }}
                            >
                                Forgotten Password ?
                            </div>
                        </Link>
                        <Button
                            variant="contained"
                            fullWidth
                            style={{ marginTop: "1.5rem" }}
                            onClick={handleLogIn}
                            disabled={loading}
                        >
                            Log In
                        </Button>
                    </div>
                    <div className="login-bottom-card">
                        Dont have an Account ?
                        <Link href="/signup">
                            <span
                                style={{ color: "#1e87db", fontWeight: "bold" }}
                            >
                                {" "}
                                Sign-up
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default index;
