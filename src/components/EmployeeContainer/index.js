import React from "react";
import EmployeeData from "../EmployeeData";
// import API from "../../utils/API";

function EmployeeContainer() {
    return (
    <div className="container">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone#</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <EmployeeData />
            </tbody>
        </table>
    </div>

    
    
    );
}

export default EmployeeContainer;