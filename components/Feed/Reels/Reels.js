import React from "react";
import Upload from "../SideBar/Upload";
import OptionMenu from "./OptionMenu";
function Reels() {
    return (
        <div className="feed">
            
            <div className="post-container">
                <video />
                <OptionMenu />
            </div>

            <div className="post-container">
                <video />
                <OptionMenu />
            </div>

            <div className="post-container">
                <video />
            </div>
        </div>
    );
}

export default Reels;
