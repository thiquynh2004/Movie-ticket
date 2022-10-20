import {configureStore} from "@reduxjs/toolkit";
import { LoadingReducer } from "../reducers/LoadingReducer";
import { QuanLyPhimReducer } from "../reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "../reducers/QuanLyRapReducer";

const store = configureStore({
    reducer: {
        //state của ứng dụng
        LoadingReducer,
        QuanLyPhimReducer,
        QuanLyRapReducer,
    }
})
export default store;