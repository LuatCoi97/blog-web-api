
const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/user");

router.post("/register", controllersUser.createUser);
router.post("/login", controllersUser.updateStatus);
router.post("/logout", controllersUser.updateStatus);
router.delete("/:id", controllersUser.deleteUser);
router.post("/update/:id", controllersUser.updateUser);
router.post("/avatar/upload/:id", controllersUser.updateUser);


router.get("/info", controllersUser.getUserInfo);


module.exports = router;