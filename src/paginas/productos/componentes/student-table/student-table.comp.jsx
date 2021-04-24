import React from 'react';
import StudentGrade from '../student-grade/student-grade.comp';
import Student from '../student/student.comp';
import './student-table.style.css';

const StudentTable = () => {
        return (
          <div className="student-table-container">
              <StudentGrade/>
              <Student/>
          </div>
        );
}


export default StudentTable;