import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Reels from "./Reels/Reels";
import Profile from "../Profile/Profile";
import { AuthContext } from "@/context/Auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Upload from "./SideBar/Upload";
const viewObj = {
    Home: Reels,
    Profile: Profile,
};

function Feed() {
    const [viewButton, setViewButton] = useState("Home");
    const [viewToRender, setViewToRender] = useState(null);

    const [userData, setUserData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        //read from DB

        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setUserData(doc.data());
        });
        return () => {
            unsub();
        };
    }, [user]);

    useEffect(() => {
        setViewToRender(viewObj[viewButton]);
    }, [viewButton]);

    return (
        <div className="feed-body">
            <SideBar
                viewButton={viewButton}
                setView={setViewButton}
                userData={userData}
            />
            
            {viewToRender}
            {/* <Profile userData={userData} /> */}
        </div>
    );
}

export default Feed;
