import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenet/home/Home";
import PropertyDetail from "./componenet/property/PropertyDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
