import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function OptionMenu() {
    return (
        <div className="option-menu">
            <div>
                <FavoriteBorderIcon />
                {"14k"}
            </div>
            <div>
                <CommentOutlinedIcon />
                {"14k"}
            </div>
            <div>
                <SendOutlinedIcon />
            </div>
            <div className="more-btn">
                <MoreHorizOutlinedIcon />
            </div>
        </div>
    );
}

export default OptionMenu;
