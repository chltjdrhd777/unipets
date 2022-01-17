const ejs = require("ejs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const path = require("path");

//todo 1. express session으로 인증정보 저장하는 창 만들기(email + password + 인증코드)
//todo 2. 유저가 브라우저에서 코드 입력하고 엔터하면, 인증코드와 함께 이메일 주소 같이 전송
//todo 3. 유저가 보내온 이메일과 인증코드를 세션에 있는 내용과 확인 후 일치하면 회원 가입 실시.
//todo 4. 일단 먼저 signup으로 보낼 때, 즉 이메일로 보내기 전에 이미 해당 유저로 가입되어 있으면 이미 가입한 이메일이라고 응답한다.
module.exports = {
  signUp(req, res) {
    const email = req.body.email;
    const code = crypto.randomBytes(3).toString("hex");

    let emailTemplate;

    ejs.renderFile(
      path.join(__dirname, "../ejs/register.ejs"),
      { email, code, authLink },
      (err, data) => {
        if (err) console.log(err);
        emailTemplate = data;
      }
    );

    let transporter = nodemailer.createTransport({
      service: "Naver",
      host: "smtp.naver.com",
      secure: process.env.NODE_ENV !== "dev",
      port: process.env.NODE_ENV !== "dev" ? 465 : 587,
      auth: {
        user: process.env.SenderEmail,
        pass: process.env.SenderPassword,
      },
    });

    transporter.sendMail(
      {
        from: process.env.SenderEmail,
        to: email,
        subject: "우니부니! 회원가입을 마무리해주세요",
        html: emailTemplate,
      },
      (error, info) => {
        if (error) {
          console.log(error);
        }

        transporter.close();
      }
    );

    res.status(200).json({ message: "message send work" });
  },
  signIn(req, res) {},
  signOut(req, res) {
    res.send("work");
  },
  oauthSignUp(req, res) {},
  mailAuth(req, res) {
    console.log(req.query);
  },
};
