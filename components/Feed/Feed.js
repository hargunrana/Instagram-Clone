import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/InstagramLogo.svg";
import sideBarButtonsInfo from "./getSideBarButtons";
import SideBarButton from "./SideBarButton";

function Feed() {
    const [sideButton, setSideButton] = useState("Home");

    return (
        <div className="feed-body">
            <div className="side-bar">
                <Image
                    className="logo-img"
                    src={logo}
                    width="200"
                    alt="Instagram Logo"
                />
                
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
                                <SideBarButton
                                    title={btn.title}
                                    icon={btn.icon}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>Feed Page</div>
        </div>
    );
}

export default Feed;
