import {configureStore} from "@reduxjs/toolkit";
import { LoadingReducer } from "../reducers/LoadingReducer";
import { QuanLyPhimReducer } from "../reducers/QuanLyPhimReducer";

const store = configureStore({
    reducer: {
        //state của ứng dụng
        LoadingReducer,
        QuanLyPhimReducer
    }
})
export default store;