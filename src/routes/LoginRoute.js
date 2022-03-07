const express = require ("express");
const Authentication = require ("../controllers/loginController");

const router = express.Router();

router.get("/login", Authentication.Login);
router.post("/login", Authentication.SignIn);

module.exports = router;