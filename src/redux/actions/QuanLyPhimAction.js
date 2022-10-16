import { quanLyPhimService } from "../../service/QuanLyPhimService"
import { LAY_DANH_SACH_BANNER, LAY_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachBannerAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();
            dispatch({
                type: LAY_DANH_SACH_BANNER,
                arrBanner: result.data.content,
            })
            console.log(result);
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
 }

 export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();
            dispatch({
                type: LAY_DANH_SACH_PHIM,
                arrFilm : result.data.content
            })
            console.log("result", result)
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
 }