import React from 'react'
import { Table, Button } from 'antd'
import { useEffect, useState } from 'react'


const DataTable = (props) => {

    // const [flag, setFlag] = useState(false);

    // let data = []; 

    // useEffect(() => { 
    //     data = props.data.map((item) => {
    //         return {
    //             key: item.key,
    //             ID: item.ID,
    //             Name: item.Name,
    //             Grade: item.Grade,
    //             Address: item.Address,
    //             Section: item.Section,
    //         }
    //     });
    //     setFlag(!flag);
    // },[props.data])

    function startEditing(e, record) {
        console.log(props.editMode)
        if (!props.editMode) {
            props.setEditMode(!props.editMode)
        }
        props.setCurrRecord(record)     
        props.form.setFieldsValue(record);   
    }

    function deleteRecord(record) {
        
        console.log(record.ID)
        delete props.data[record.ID];
        props.setFlag(!props.flag);
        console.log(props.data)
    }

    const columns = [
        {
            title: 'ID', 
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        { 
            title: 'Grade',
            dataIndex: 'Grade',
            key: 'Grade',
        },
        {
            title: 'Section',
            dataIndex: 'Section',
            key: 'Section',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
        },
        {
            title: 'Edit',
            key: 'Edit',
            render: (text, record) => (
                <Button onClick={(e) => {startEditing(e, record)}}>Edit</Button>
            ),
        },
        {
            title: 'Delete',
            key: 'Delete',
            render: (text, record) => (
                <Button onClick={() => {deleteRecord(record)}}>Delete</Button>
            ),
        }
    ];

    // replace sampleData with props.data
     const data = Object.values(props.data).map((item) => {
        return {
            key: item.key,
            ID: item.ID,
            Name: item.Name,
            Grade: item.Grade,
            Address: item.Address,
            Section: item.Section,
        }
    });

    return (
        <>
            <Table columns={columns} dataSource={data}/>
        </>
    )
}

export default DataTable
