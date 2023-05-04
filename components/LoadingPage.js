import Image from "next/image";
import React from "react";
import logo from "../assets/Instagram.svg";
import metaLogo from "../assets/meta.svg";
function LoadingPage() {
    return (
        <div className="loading-page">
            <div className="insta-logo">
                <Image src={logo} width={70} alt="/"></Image>
            </div>

            <div className="meta-logo">
                <div>from</div>
                <Image src={metaLogo} width={100} alt="/"></Image>
            </div>
        </div>
    );
}

export default LoadingPage;
