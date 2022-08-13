import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Subscription from "../components/Body/Subscription"
import NavigationBar from "../components/Header/NavBar"
import { getSubscriptions } from "../store/feed";

const SubscriptionPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubscriptions());
    }, [ dispatch ]);
    return (
        <>
            <NavigationBar></NavigationBar>
            <Subscription></Subscription>
        </>
    )
}
export default SubscriptionPage;