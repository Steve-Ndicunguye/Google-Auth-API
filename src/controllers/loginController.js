const { OAuth2Client } = require ("google-auth-library");
const models = require ("../database/models");

const CLIENT_ID =
  "769407000889-7l0iqc5c028eblvsef0kdvoo3t3d7i2e.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

class Authentication {
  static Login = async (req, res) => {
    res.render("login");
  };
 // "start": "npm run build && nodemon dist/index.js",
  static SignIn = async (req, res) => {
    let token = req.body.token;
    console.log(token);
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID, 
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
    
      console.log(payload);
      res.cookie("session-token", token);
      res.send("success");
      const post = await models.User.create({
        name: payload.name,
        email: payload.email,
        googleid: payload.sub,
      });
      return res.status(201).json({
        post,
      });
    } catch (error) {
      console.error;
    }
  };
}

module.exports = Authentication;