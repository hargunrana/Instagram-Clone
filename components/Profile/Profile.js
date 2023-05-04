/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React from "react";
// import Avatar from "../../assets/Avatar.svg";
function Profile({ userData }) {
    return (
        <div className="profile-body">
            <div className="profile-area">
                <div className="profile-info">
                    <div className="profile-picture">
                        {/* <Image width="130" src={Avatar} /> */}
                        <img src={userData.downloadURL} width={100} alt=""/>
                        
                    </div>
                    <div className="user-info">
                        <div
                            style={{
                                marginTop: "1rem",
                                paddingBottom: "1rem",
                                paddingLeft: "1rem",
                                fontSize: "18px",
                            }}
                        >
                            {userData.fullName}
                            {/* Name */}
                        </div>

                        <div className="followers-info">
                            <div>
                                <span style={{ fontWeight: "bold" }}>42</span>
                                {" posts"}
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>4234</span>
                                {" followers"}
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>100</span>
                                {" following"}
                            </div>
                        </div>
                        <div
                            style={{
                                marginTop: "1rem",

                                paddingLeft: "1rem",
                                fontSize: "13px",
                                fontWeight: "bold",
                            }}
                        >
                            {userData.fullName}
                        </div>
                        <div className="bio"></div>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
