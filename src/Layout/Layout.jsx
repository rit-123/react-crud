import React from 'react'
import { Menu } from "antd";
import { Outlet } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items = [
    {
      label: <Link  to="/">Home</Link>,
      key: 'mail',
     /// style : {padding:'10p', backgroundColor: 'red', fontSize: '32p'},
      icon: <MailOutlined />,
    },
    {
      label: <Link to='/about'>About</Link>,
      key: 'app',
      icon: <AppstoreOutlined />,
      
    },
    {
        label: <Link to='/crud'>CRUD</Link>,
        key: 'setting',
        icon: <SettingOutlined />,
    }
  ];
const Layout = () => {
    

    return (
    <>
        <Menu mode="horizontal " items={items} />
        <Outlet />
    </>
    )
}

export default Layout
