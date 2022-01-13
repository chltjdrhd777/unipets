import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Community from "routes/Community";

function App() {
  useEffect(() => {
    //kaako
    try {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT);
    } catch (err) {
      console.log(err, "from kakao");
    }
  }, []);

  useEffect(() => {
    try {
      window.gapi.load("client", function () {
        window.gapi.client
          .init({
            apiKey: process.env.REACT_APP_GOOGLE_APIKEY,
            clientId: process.env.REACT_APP_GOOGLE_CLIENT,
            scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
          })
          .then(() => {
            window.gapi.GoogleAuthService = window.gapi.auth2.getAuthInstance();
          });
      });
    } catch (err) {
      console.log(err, "from google");
    }
  }, []);

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
