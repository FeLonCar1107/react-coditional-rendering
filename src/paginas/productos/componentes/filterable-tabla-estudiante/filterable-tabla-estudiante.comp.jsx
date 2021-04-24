import React from 'react';
import StudentTable from '../student-table/student-table.comp';
import SearchBar from '../search-bar/search-bar.comp';
import './filterable-tabla-estudiante.style.css';

const FilterableTablaEstudiante = () => {
        return (
          <div className="filterable-tabla-estudiante-container">
            <SearchBar/>
            <StudentTable/>
          </div>
        );
}


export default FilterableTablaEstudiante;