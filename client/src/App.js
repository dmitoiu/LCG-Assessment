import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Helmet from "react-helmet";
import {Navigate} from "react-router";

function App() {
  return (
      <>
          <Router>
              <Helmet>
                  <title>Darie-Dragoș Mitoiu</title>
              </Helmet>
              <Header/>
              <main className={"h-[75vh]"}>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                  </Routes>
              </main>
              <Footer/>
          </Router>
      </>
  );
}

export default App;
