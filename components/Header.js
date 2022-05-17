import React from "react";
import { Layout, Menu, Avatar, Button, Breadcrumb } from "antd";
import Theam from "../styles/Menu.module.css";
import ReactDOM from "react-dom";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import {
  UserOutlined,
  MenuOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
  const { Header, Content, Footer } = Layout;
  const navMenu = ["1", "2", "3"];
  const loginStyle = {
    //position: "absolute",
    //right: "0%",
    //marginLeft: "1500%",
    width: "50px",
    height: "30px",
    color: "#000",
  };

  return (
    <div>
      <Layout className="layout" style={{ position: "relative" }}>
        <Header>
          <div className="Theam.logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item
              key="1"
              style={{ fontWeight: "bold", border: "0", color: "white" }}
            >
              KAM
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ fontWeight: "bold", border: "0", color: "white" }}
            >
              KPOP COMEBACK UPDATE
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ fontWeight: "bold", border: "0", color: "white" }}
            >
              KPOP PROFILE
            </Menu.Item>
            <Menu.Item
              key="4"
              style={{ fontWeight: "bold", border: "0", color: "white" }}
            >
              KPOP LIGHTSTICK
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{ fontWeight: "bold", border: "0", color: "white" }}
            >
              <Link href="/chatbroad">
                <a>CHAT BOARD</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="6" style={{ position: "absolute", right: "12px" }}>
              <Button
                style={loginStyle}
                icon={
                  <span>
                    <MenuOutlined />
                    <UserOutlined />
                  </span>
                }
              ></Button>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <></>
    </div>
  );
}
