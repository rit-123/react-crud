import React from 'react'
import { Input, Form , Checkbox, Button } from 'antd'
// import { validate } from './validation methods'
import { validate } from './validation methods'

const Field = (props) => {
    

    return (
        // <div style={{margin:"15px"}}>
        //         { `${props.field}:`} <Input ref={props.elementRef} onChange={(e) => validate(e, props.setVal, props.val)}  className="inputbox" placeholder={props.field} size="large"/>
        // </div>
        <Form
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
        autoComplete="off"
    >
        <Form.Item
        label="Username"
        name="username"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[
            {
            required: true,
            message: 'Please input your password!',
            },
        ]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
    )
}

export default Field
