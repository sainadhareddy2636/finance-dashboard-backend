const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const recordValidator = require("../validators/recordValidator");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../controllers/recordController");

router.get("/", auth, getRecords);

router.post("/", auth, role("admin"), recordValidator, createRecord);

router.put("/:id", auth, role("admin"), recordValidator, updateRecord);

router.delete("/:id", auth, role("admin"), deleteRecord);

module.exports = router;