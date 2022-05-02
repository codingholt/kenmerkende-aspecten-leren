import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Answeroptions from "./routes/answeroptions";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/answeroptions' element={<Answeroptions/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);