import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
export const history = createBrowserHistory();
function App() {
  return(
    <Routes>
    <Route element={<HomeTemplate />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
  )
 
}

export default App;
