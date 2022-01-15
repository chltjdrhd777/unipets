module.exports = {
  signUp(req, res) {
    res.send("work");
  },
  signIn(req, res) {},
  signOut(req, res) {
    res.send("work");
  },
  kakaoOauth(req, res) {
    console.log(req.body);
  },
  naverOauth(req, res) {
    console.log(req.params, req.query, req.route, req.path, req.url);
  },
};
