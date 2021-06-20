import React, {useState, useEffect} from "react";
import "./style.css"
import EmployeeData from "../EmployeeData";
import API from "../../utils/API"

function EmployeeContainer(props) {

    const [employees, setEmployees] = useState("");
    const [ascending, setAscending] = useState(false);

    function sortByLastName() {
        setAscending(!ascending)
        if (ascending) {
            const sortedNames = [...employees];
            sortedNames.sort((a, b) => (a.name.last).localeCompare(b.name.last))
            setEmployees(sortedNames)
        } else {
            const sortedNames = [...employees];
            sortedNames.sort((a, b) => (b.name.last).localeCompare(a.name.last))
            setEmployees(sortedNames)
        }
    }

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
                <th scope="col" onClick={sortByLastName}>Name <i className="arrow down"></i></th>
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