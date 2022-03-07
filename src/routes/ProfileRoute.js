const express = require ("express");
const profileController = require ("../controllers/ProfileController");

const router = express.Router();

router.get("/getAllUsers", profileController.getAllUsers)
router.get("/getAllProfiles", profileController.getAllProfile)
router.post("/addProfile", profileController.addProfile) 
router.get("/getSingleProfile/:id", profileController.getSingleProfile)
router.get("/testing", (req, res) => {
res.json({ message: "Hello" });

});

module.exports = router;