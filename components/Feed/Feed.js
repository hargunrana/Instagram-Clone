import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Reels from "./Reels/Reels";
import Profile from "../Profile/Profile";

const viewObj = {
    Home: Reels,
    Profile: Profile,
};

function Feed() {
    const [viewButton, setViewButton] = useState("Home");
    const [viewToRender, setViewToRender] = useState(null);

    useEffect(() => {
        setViewToRender(viewObj[viewButton]);
    }, [viewButton]);

    return (
        <div className="feed-body">
            <SideBar viewButton={viewButton} setView={setViewButton} />

            {viewToRender}

            
        </div>
    );
}

export default Feed;

// collections->
//     uid->
//         {
//             name,
//             age,
//             gender,
//             posts:[],
//         }
