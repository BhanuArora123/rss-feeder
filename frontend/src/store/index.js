import { configureStore } from "@reduxjs/toolkit";
import feedSlice from "./feed";
// import { createStore } from "redux";

const store = configureStore({
    reducer:{
        feeds:feedSlice.reducer
    }
});

export default store;