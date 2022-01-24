const Student = require("../models/Student");

class StudentController {
  static createStudent = (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const department = req.body.department;
    const student = new Student({
      name: name,
      age: age,
      email: email,
      department: department,
    });
    student
      .save()
      .then((result) => {
        res.redirect("/students");
      })
      .catch((err) => console.log(err));
  };

  static getAllStudents = async (req, res, next) => {
    try {
      const students = await Student.find();
      res.render("index", { students: students });
    } catch (err) {
      console.log(err);
    }
  };

  static editStudent = async (req, res, next) => {
    const studentId = req.params.id;
    const student = await Student.findOne({ _id: studentId });
    res.render("update", { student: student });
  };

  static updateStudentById = (req, res, next) => {
    const studentId = req.params.id;
    Student.findByIdAndUpdate(studentId, req.body)
      .then((result) => {
        res.redirect("/students");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static deleteStudent = (req, res, next) => {
    const studentId = req.params.id;
    console.log(studentId);
    Student.findByIdAndRemove(studentId)
      .then((result) => {
        res.redirect("/students");
      })
      .catch((err) => console.log(err));
  };
}

module.exports = StudentController;
