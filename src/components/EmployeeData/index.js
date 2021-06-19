import React from "react";
import "./style.css";
// import API from "../../utils/API"
// import axios from "axios";

function EmployeeData ({employees, setEmployee, search}) {


    return (
        <>
        {employees
        .filter(displayEmployee => displayEmployee.name.first.toLowerCase().includes(search.toLowerCase()) || displayEmployee.name.last.toLowerCase().includes(search.toLowerCase()))
        .map(displayEmployee => (
            <tr key={displayEmployee.email}>
                <th scope="row" alt="headshot"><img alt="headshot" src={displayEmployee.picture.medium}/></th>
                <td>{displayEmployee.name.last}, {displayEmployee.name.first}</td>
                <td>{displayEmployee.phone}</td>
                <td><a href="mailto:{displayEmployee.email}">{displayEmployee.email}</a></td>
            </tr>
        ))}
        
        </>

    );
}

export default EmployeeData;