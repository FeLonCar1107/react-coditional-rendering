import React from 'react';
import './student-grade.style.css';

const StudentGrade = () => {
        return (
          <div className="student-grade-container">
               <strong>Programming 1</strong>
              <div className="student-grade2-container">
                  <strong>Programming 2</strong> 
                  <div className="student-grade3-container">
                    <strong>Progrmmaing 3</strong>
                  </div>
              </div>
          </div>
        );
}


export default StudentGrade;