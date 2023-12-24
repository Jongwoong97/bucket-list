import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import SharedBucket from "./Shared";
import PersonalBucket from "./Personal";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shared" element={<SharedBucket />} />
      <Route path="/personal" element={<PersonalBucket />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
