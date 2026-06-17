const express = require("express");

const {
  createRegistration,
  getAllRegistrations
} = require("../controllers/registrationController");

const router = express.Router();

router.post(
  "/register",
  createRegistration
);

router.get("/register", getAllRegistrations);

module.exports = router;