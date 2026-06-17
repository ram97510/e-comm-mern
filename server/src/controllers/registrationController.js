const Registration = require("../models/Registration");

const createRegistration = async (
  req,
  res
) => {
  try {
    const registration =
      await Registration.create(req.body);

    res.status(201).json({
      success: true,
      message: "Form Submitted Successfully",
      data: registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    const data = await Registration.find().sort({
      createdAt: -1,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations
};