import React, { useEffect } from "react";
import { oauthHelpers } from "utils/oauth";

function NaverOauth() {
  useEffect(() => {
    oauthHelpers.naverLogin();
  }, []);
  return <div></div>;
}

export default NaverOauth;
