const express = require("express");
const router = express.Router();

const studentController = require("../controllers/StudentController");

router.get("/", studentController.getAllStudents);
router.post("/", studentController.createStudent);
router.get("/edit/:id", studentController.editStudent);
router.post("/update/:id", studentController.updateStudentById);
router.get("/delete/:id", studentController.deleteStudent);

module.exports = router;
