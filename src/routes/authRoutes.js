const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const { registerValidator, loginValidator } = require("../validators/authValidator");
router.post("/register", register);
router.post("/login", login);

module.exports = router;