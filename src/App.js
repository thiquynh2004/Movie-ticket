import "./App.css";
import { createBrowserHistory } from "history";
// import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
// import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import FilmDetail from "./page/FilmDetail/FilmDetail";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";
import ListFilm from "./page/Home/ListFilms/ListFilm";
import Loading from "./components/Loading";
import CheckoutTemplate from "./template/CheckoutTemplate/CheckoutTemplate";
export const history = createBrowserHistory();

const Home = lazy(()=>import("./page/Home/Home"));
const HomeTemplate = lazy(()=>import("./template/HomeTemplate/HomeTemplate"));
const FilmDetail = lazy(()=>import("./page/FilmDetail/FilmDetail"));
function App() {
  return (
    <Suspense fallback={<Loading/>}>
      
    <Routes>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route element={<HomeTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<FilmDetail/>}>
          <Route index element={<ListFilm/>}/>
        </Route>
      </Route>
      <Route path="/checkout/:id" element={<CheckoutTemplate />}>

      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
