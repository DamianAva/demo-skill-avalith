exports.getAllStudents = 'SELECT id, name, age, dni FROM student WHERE deleted = 0';

exports.getAllTeachers = 'SELECT id, name FROM teacher';

exports.getExamsByStudent = 
    `SELECT
        id,
        subject,
        score
    FROM
        exam
    WHERE
        student_id = ?`;

exports.getExamsByStudentComplete = 
    `SELECT
        exam.id,
        exam.subject,
        exam.score,
        student.name,
        student.age
    FROM
        exam
    LEFT JOIN
        student ON exam.student_id = student.id
    WHERE
        exam.student_id = ?`;

exports.getUserByEmailPassword = 'SELECT id FROM user WHERE email = ? AND password = ?';

exports.getStudent = 'SELECT id, name, age, dni FROM student WHERE id = ?';

exports.getStudentsByTeacher =
    `SELECT
        student.id,
        student.name
    FROM
        student
    LEFT JOIN
        student_teacher ON student.id = student_teacher.student_id
    WHERE
        student_teacher.teacher_id = ?;
`;

exports.getTeachersByStudent =
    `SELECT
        teacher.id,
        teacher.name
    FROM
        teacher
    LEFT JOIN
        student_teacher ON teacher.id = student_teacher.teacher_id
    WHERE
        student_teacher.student_id = ?;
`;

exports.addStudent = 'INSERT INTO student SET ?';

exports.updateStudent = 'UPDATE student SET ? WHERE id = ?';

exports.deleteFlagStudent = 'UPDATE student SET deleted = 1 WHERE id = ?';

exports.deleteStudent = 'DELETE FROM student WHERE id = ?';