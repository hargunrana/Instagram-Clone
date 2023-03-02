import "@/styles/globals.css";
import "./signup/signup.css";
import "./login/login.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/Feed/Feed.css";
import "../components/Feed/SideBar/SideBarButton.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
