import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const feedSlice = createSlice({
    name:"feeds",
    initialState:{
        feeds:[],
        feedSubscriptions:[]
    },
    reducers:{
        updateFeeds(state,actions){
            state.feeds = actions.payload;
        },
        updateFeedSubscriptions(state,actions){
            state.feedSubscriptions = actions.payload;
        }
    }
});
export const feedActions = feedSlice.actions;
export const getSubscriptions = () => {
    const userId = localStorage.getItem("unique_id");
    return async (dispatch) => {
        let getSubscriptions = await axios.get(`http://localhost:8080/rss/getSubscriptionFeeds?id=${userId}`);
        dispatch(feedActions.updateFeedSubscriptions(getSubscriptions.data.feedData));
    }
}
export const subscribeToFeed = (feedUrl,feedName) => {
    return async (dispatch) => {
        const userId = localStorage.getItem("unique_id");
        await axios.post("http://localhost:8080/rss/subscribe",{
            id:userId,
            feedUrl,
            feedName
        })
        dispatch(getSubscriptions());
        window.location.href="/";
    }
}
export const deleteFeed = (feedId) => {
    return async(dispatch) => {
        const userId = localStorage.getItem("unique_id");
        await axios.delete(`http://localhost:8080/rss/unsubscribe?id=${userId}&feedId=${feedId}`);
        dispatch(getSubscriptions());
    }
}
export const getFeeds = () => {
    return async (dispatch) => {
        const userId = localStorage.getItem("unique_id");
        let res = await axios.get(`http://localhost:8080/rss/fetch?id=${userId}`);
        dispatch(feedActions.updateFeeds(res.data.allFeeds));
    }

}
export default feedSlice;