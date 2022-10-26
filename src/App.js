import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
// import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import FilmDetail from "./page/FilmDetail/FilmDetail";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";
import ListFilm from "./page/Home/ListFilms/ListFilm";
export const history = createBrowserHistory();


const Home = lazy(()=>import("./page/Home/Home"))
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      
    <Routes>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route element={<HomeTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<FilmDetail/>}>
          <Route index element={<ListFilm/>}/>
        </Route>
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
