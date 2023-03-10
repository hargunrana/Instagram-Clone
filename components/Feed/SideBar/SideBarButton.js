import React from "react";

function SideBarButton(props) {
    return (
        <div className="side-bar-btn">
            <props.icon style={{fontSize:"30px"}} />{" "}
            <div className="btn-title" style={{ paddingLeft: "1rem" }}>{props.title}</div>
        </div>
    );
}

export default SideBarButton;
