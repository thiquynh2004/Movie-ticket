import { LAY_DANH_SACH_BANNER, LAY_DANH_SACH_PHIM, LAY_THONG_TIN_PHIM } from "../actions/types/QuanLyPhimType"

const initialState = {
    arrBanner: [],
    arrFilm: [],
    filmDetail: {},
}

export const QuanLyPhimReducer = (state= initialState, action) =>  {
    switch(action.type) {
        case LAY_DANH_SACH_BANNER:
            state.arrBanner = action.arrBanner
            return{ ...state}
        case LAY_DANH_SACH_PHIM:
            state.arrFilm = action.arrFilm
            return{...state}
        case LAY_THONG_TIN_PHIM:
            state.filmDetail = action.filmDetail
            return {...state}
        default: return{ ...state}
    }
}