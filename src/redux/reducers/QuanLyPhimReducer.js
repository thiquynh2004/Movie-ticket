import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_DANG_CHIEU,
  LAY_DANH_SACH_PHIM,
  LAY_DANH_SACH_SAP_CHIEU,
  LAY_THONG_TIN_PHIM,
} from "../actions/types/QuanLyPhimType";

const initialState = {
  arrBanner: [],
  arrFilm: [],
  arrDefault: [],
  filmDetail: {},
  dangChieu: true,
  sapChieu: true,
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_BANNER:
      state.arrBanner = action.arrBanner;
      return { ...state };
    case LAY_DANH_SACH_PHIM:
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;

      return { ...state };
    case LAY_DANH_SACH_DANG_CHIEU:
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    case LAY_DANH_SACH_SAP_CHIEU:
      state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    case LAY_THONG_TIN_PHIM:
      state.filmDetail = action.filmDetail;
      return { ...state };
    default:
      return { ...state };
  }
};
