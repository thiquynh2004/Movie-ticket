import {configureStore} from "@reduxjs/toolkit";
import { LoadingReducer } from "../reducers/LoadingReducer";

const store = configureStore({
    reducer: {
        //state của ứng dụng
        LoadingReducer
    }
})
export default store;