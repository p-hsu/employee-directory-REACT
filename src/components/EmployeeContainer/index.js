import React, {useState, useEffect} from "react";
import EmployeeData from "../EmployeeData";
import API from "../../utils/API"

function EmployeeContainer(props) {

    const [employees, setEmployees] = useState("");
    // const [ascending, setAscending] = useState(false);

    // function sortByLastName() {
    //     if (ascending) {
    //         const sortedNames = [...employees];
    //         sortedNames.sort((a, b) => {
    //             return (a.name.last).localeCompare((b.name.last))
    //         })
    //     }
    // }

    useEffect ( () => {
        API.getEmployees()
        .then(target => {
            setEmployees(target.data.results);
            console.log(target.data.results);
        })
        .catch(err => console.error("Error fetching data:" + err))
    }, []);


    return (
    <div className="container">
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone#</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                { employees.length ? <EmployeeData employees = {employees} setEmployees = {setEmployees} search = {props.search} /> : null}
            </tbody>
        </table>
    </div>

    
    
    );
}

export default EmployeeContainer;