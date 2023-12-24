import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import SharedBucket from "./Shared";
import PersonalBucket from "./Personal";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shared" element={<SharedBucket />} />
      <Route path="/personal" element={<PersonalBucket />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
