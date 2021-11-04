exports.getAllStudents = 'SELECT id, name, age, dni FROM student WHERE deleted = 0';

exports.getStudent = 'SELECT id, name, age, dni FROM student WHERE id = ?';

exports.addStudent = 'INSERT INTO student SET ?';

exports.updateStudent = 'UPDATE student SET ? WHERE id = ?';

exports.deleteFlagStudent = 'UPDATE student SET deleted = 1 WHERE id = ?';

exports.deleteStudent = 'DELETE FROM student WHERE id = ?';