import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../foundation/base.scss";
import { Home } from "../pages/home";
import { Test } from "../pages/test";
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
