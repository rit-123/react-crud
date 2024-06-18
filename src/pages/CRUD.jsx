import React from 'react'
import { useState } from 'react';
import DataTable from './../DataTable';
import { Form, Input, Button, Checkbox } from 'antd'
import { validate } from '../validation methods';

let count = 1;

const CRUD = () => {
    const [data, setData] = useState({});
    const [editMode, setEditMode] = useState(false); 
    const [currRecord, setCurrRecord] = useState({});
    const [flag, setFlag] = useState(false);

    const [showSection, setShowSection] = useState(false)

    const [form] = Form.useForm()
    

    const onFinish = (values) => {
        
        if (!editMode) {
            // Adding the ID and the key to the current object
            values.ID = count;
            values.key = count;
            count++;

            // updating data and triggering the flag to re-render the table
            data[values.ID] = values;
            setFlag(!flag)

            // Clearing the fields
            form.resetFields()
        } else {
            values.ID = currRecord.ID;
            values.key = currRecord.key;
            // Editing the record rather than creating a new one
            data[currRecord.ID] = values;
            // setting off the flag
            setFlag(!flag)

            // Clearing the fields
            form.resetFields()
            setEditMode(false)
        }
        
    
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    

    return (
        <div>
            {/* <DataForm currRecord={currRecord} setData={setData}  data={data} editMode={editMode} /> */}
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input onChange={(e) => validate(e, form)} />
                </Form.Item>

                <Form.Item
                    label="Class"
                    name="Grade"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input onChange={(e) => validate(e, form, setShowSection, showSection)} />
                </Form.Item>
                <Form.Item
                    label="Section"
                    name="Section"
                    hidden={showSection ? true : false}
                    rules={[
                        {
                            required: false,
                            message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input onChange={(e) => validate(e, form)} />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input onChange={(e) => validate(e, form)} />
                </Form.Item>


                <Form.Item wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
                    <Button  type="primary" htmlType="submit">
                        {editMode ? "Update" : "Submit"}
                    </Button>
                </Form.Item>
            </Form>
            <DataTable flag={flag} setFlag={setFlag} form={form} data={data} setCurrRecord={setCurrRecord} editMode={editMode} setEditMode={setEditMode}/>
        </div>
    )
}

export default CRUD