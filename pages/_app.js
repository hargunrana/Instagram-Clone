import "@/styles/globals.css";
import "./signup/signup.css";
import "./login/login.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/Feed/Feed.css";
import "../components/Feed/SideBar/SideBarButton.css";
import "../pages/forgot-password/forgot-password.css";
import "../components/Profile/Profile.css";

import AuthWrapper from "@/context/Auth";
export default function App({ Component, pageProps }) {
    return (
        <AuthWrapper>
            <Component {...pageProps} />
        </AuthWrapper>
    );
}
