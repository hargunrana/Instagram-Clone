import React from "react";
import OptionMenu from "./OptionMenu";
import SideBar from "./SideBar/SideBar";

function Feed() {
    return (
        <div className="feed-body">
            <SideBar />

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
        </div>
    );
}

export default Feed;
