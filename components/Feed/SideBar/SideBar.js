import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../../../assets/InstagramLogo.svg";
import logoSmall from "../../../assets/InstagramLogoSmall.svg";
import sideBarButtonsInfo from "./getSideBarButtons";
import SideBarButton from "./SideBarButton";

import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { AuthContext } from "@/context/Auth";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Upload from "./Upload";

function SideBar({ viewButton, setView, userData }) {
    const [sideButton, setSideButton] = useState(viewButton);
    const { logOut, user } = useContext(AuthContext);
    const router = useRouter();

    const handleLogOut = async () => {
        await logOut();
        router.push("/login");
    };

    return (
        <div className="side-bar">
            <Image className="logo-small" src={logoSmall} alt="Instagram" />

            <Image className="logo" src={logo} alt="Instagram" />

            <div className="side-bar-buttons">
                {sideBarButtonsInfo.map((btn, index) =>
                    sideButton === btn.title ? (
                        <div key={index} style={{ fontWeight: "bold" }}>
                            <SideBarButton
                                title={btn.title}
                                icon={btn.iconBold}
                            />
                        </div>
                    ) : (
                        <div
                            key={index}
                            onClick={() => {
                                setSideButton(btn.title);
                                setView(btn.title);
                            }}
                        >
                            <SideBarButton title={btn.title} icon={btn.icon} />
                        </div>
                    )
                )}

                <div>
                    {sideButton === "Create" ? (
                        <div style={{ fontWeight: "bold" }}>
                            <SideBarButton title={"Create"} icon={AddBoxIcon} />
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setSideButton("Create");
                                setView("Create");
                            }}
                        >
                            <SideBarButton
                                title={"Create"}
                                icon={AddBoxOutlinedIcon}
                            />
                        </div>
                    )}
                </div>

                {/* Profile */}
                {sideButton === "Profile" ? (
                    <div style={{ fontWeight: "bold" }}>
                        <SideBarButton
                            title={"Profile"}
                            icon={AccountCircleIcon}
                        />
                    </div>
                ) : (
                    <div
                        onClick={() => {
                            setSideButton("Profile");
                            setView("Profile");
                        }}
                    >
                        <SideBarButton
                            title={"Profile"}
                            icon={AccountCircleOutlinedIcon}
                        />
                    </div>
                )}
            </div>

            <div onClick={() => handleLogOut()}>
                <SideBarButton title={"Log Out"} icon={AccountCircleIcon} />
            </div>

            <Upload userData={userData} />
        </div>
    );
}

export default SideBar;
