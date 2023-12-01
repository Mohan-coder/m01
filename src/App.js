import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./utils/userContext";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import SEO from "./components/SEO";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));


const App = () => {
  const [user, setUser] = useState(null);


  return ( 
      <>
    <UserContext.Provider value={[user, setUser]}>
      <Toaster />
      <Router>
        <SEO dynamicTitle="krishtechnologies | Home" />  
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
          </>
  );
};

export default App;
