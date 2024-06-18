import React from 'react'
import { Button } from 'antd';
import Field from './Field';
import { useState, useRef } from 'react';
import { populate } from './validation methods';

const DataForm = (props) => {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [section, setSection] = useState("");
    const [address, setAddress] = useState(""); 

    const nameRef = useRef(null);
    const gradeRef = useRef(null);
    const sectionRef = useRef(null);
    const addressRef = useRef(null);

    const [flag, setFlag] = useState(false);

    function handleSubmit() {
        populate(name,grade,section,address, props.setData, props.data);
        // Reset all the field values to empty
        setName("");
        setGrade("");
        setSection("");
        setAddress("");
        // clearing the value attribute of the input fields
        nameRef.value = "";
        gradeRef.current.input.value = "";
        sectionRef.current.input.value = "";
        addressRef.current.input.value = "";
        setFlag(!flag);
    }

    return (
        <div className="inputcontainer">
            
            <Field elementRef={nameRef} field="Name" val={name} setVal={setName}/>
            <Field elementRef={gradeRef} field="Grade" val={grade} setVal={setGrade}/>
            <Field elementRef={sectionRef} field="Section" val={section} setVal={setSection}/>
            <Field elementRef={addressRef} field="Address" val={address} setVal={setAddress}/>
            <Button onClick={() => {handleSubmit()}} style={{width:"100px", marginLeft:"20px", marginBottom:"10px"}}>{props.editMode ? "Edit" : "Submit"}</Button>

        </div>
    )
}

export default DataForm
