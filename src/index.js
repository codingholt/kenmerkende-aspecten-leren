import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Answeroptions from "./routes/answeroptions";
import App from "./App";
import Questionandanswer from "./routes/Questionandanswer";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/answeroptions' element={<Answeroptions/>}/>
      <Route path='/qanda' element={<Questionandanswer/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);