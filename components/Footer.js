import React from 'react'
import { Layout, Menu,Avatar,Button, Breadcrumb } from 'antd';
import Theam from '../styles/Menu.module.css'
import ReactDOM from 'react-dom';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { UserOutlined,MenuOutlined, BgColorsOutlined } from '@ant-design/icons';

export default function Footer() {
    const { Header, Content, Footer } = Layout;
   
    const navMenu = ["1","2","3"]
    const loginStyle = {
        //position: "absolute",
        //right: "0%",
        //marginLeft: "1500%",
        width: "50px",
        height: "30px",
        color: "#000"
    }

    return (
        <div>
            <Layout className="layout" style={{position: 'relative'}}>
    <Footer style={{position: 'relative'}}>
    
      <div className="Theam.logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['20']}>
      <Menu.Item key="1">KAM</Menu.Item>
      <Menu.Item key="2">KPOP COMEBACK UPDATE</Menu.Item>
        

        
      </Menu>
      
  
    </Footer>
  </Layout>
  <>
  
</>
        </div>
    )
}
