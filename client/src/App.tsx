import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Community from "routes/Community";
import NaverOauthLogin from "routes/NaverLogin";

function App() {
  useEffect(() => {
    //kaako
    try {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT);
    } catch (err) {
      console.log(err, "from kakao");
    }

    //google
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

  // useEffect(() => {
  //   try {
  //     window.gapi.load("client", function () {
  //       window.gapi.client
  //         .init({
  //           apiKey: process.env.REACT_APP_GOOGLE_APIKEY,
  //           clientId: process.env.REACT_APP_GOOGLE_CLIENT,
  //           scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
  //           discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  //         })
  //         .then(() => {
  //           window.gapi.GoogleAuthService = window.gapi.auth2.getAuthInstance();
  //         });
  //     });
  //   } catch (err) {
  //     console.log(err, "from google");
  //   }
  // }, []);

  // useEffect(()=>{
  //   try{

  //   }catch(err){
  //     console.log(err,"from naver")
  //   }
  // },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/auth/naver" element={<NaverOauthLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
