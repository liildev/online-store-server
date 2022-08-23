const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const validation = require("../middleware/validationMiddleware");

router.post("/registration", validation, userController.registration);
router.post("/login", validation, userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
