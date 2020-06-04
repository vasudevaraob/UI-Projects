import React from 'react'

const Employee = (props) => {
// let name="Vasudev"
// let branch="mech"
// let status="active"

    return (
    <div> Employee name {props.employee.id}
    <p>Department  {props.employee.branch}</p>
    <p>Status  {props.employee.status}</p>
    </div>

    );
}
export default Employee

