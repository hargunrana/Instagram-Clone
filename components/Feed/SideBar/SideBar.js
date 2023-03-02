import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/InstagramLogo.svg";
import logoSmall from "../../../assets/InstagramLogoSmall.svg";
import sideBarButtonsInfo from "./getSideBarButtons";
import SideBarButton from "./SideBarButton";

import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function SideBar() {
    const [sideButton, setSideButton] = useState("Home");
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
                            onClick={() => setSideButton(btn.title)}
                        >
                            <SideBarButton title={btn.title} icon={btn.icon} />
                        </div>
                    )
                )}

                {sideButton === "Create" ? (
                    <div style={{ fontWeight: "bold" }}>
                        <SideBarButton title={"Create"} icon={AddBoxIcon} />
                    </div>
                ) : (
                    <div onClick={() => setSideButton("Create")}>
                        <SideBarButton
                            title={"Create"}
                            icon={AddBoxOutlinedIcon}
                        />
                    </div>
                )}
                {sideButton === "Profile" ? (
                    <div style={{ fontWeight: "bold" }}>
                        <SideBarButton
                            title={"Profile"}
                            icon={AccountCircleIcon}
                        />
                    </div>
                ) : (
                    <div onClick={() => setSideButton("Profile")}>
                        <SideBarButton
                            title={"Profile"}
                            icon={AccountCircleOutlinedIcon}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBar;
