export const oauthHelpers = {
  kakaoLogin() {
    window.Kakao.Auth.login({
      success: function (response: any) {
        console.log(response, "response from loginsuccess");
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            console.log(response);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  },

  kakaoLogout() {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response: any) {
          console.log(response);
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
      window.Kakao.Auth.setAccessToken(undefined);
    }
  },

  async googleLogin() {
    try {
      const response = await window.gapi.GoogleAuthService.signIn();
      console.log(response.getBasicProfile());
    } catch (err) {
      console.log(err, "from google");
    }
  },

  googleLogout() {
    try {
      window.gapi.GoogleAuthService.signOut().then(() => console.log("logout"));
      window.gapi.GoogleAuthService.disconnect();
    } catch (err) {
      console.log(err);
    }
  },
};
