import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "routes/Community";
import Home from "routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
