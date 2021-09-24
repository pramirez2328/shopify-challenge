import React from "react";
import "./App.css";
import ListOfImages from "./components/ListOfImages";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <div className="App">
      <BackToTop />
      <Header />
      <ListOfImages />
    </div>
  );
}

export default App;
