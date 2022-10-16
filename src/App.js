import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
// import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
export const history = createBrowserHistory();


const Home = lazy(()=>import("./page/Home/Home"))
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route element={<HomeTemplate />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
