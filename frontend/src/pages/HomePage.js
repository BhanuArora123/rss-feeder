import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Feeds from "../components/Body/Feeds";
import NavigationBar from "../components/Header/NavBar"
import { getFeeds, getSubscriptions } from "../store/feed";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFeeds());
    }, [ dispatch ]);
    return (
        <>
            <NavigationBar></NavigationBar>
            <Feeds ></Feeds>
        </>
    )
}
export default HomePage;