import React, { useState } from 'react'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import { Form, Input, Button, Checkbox, Modal } from 'antd';

export default function contact() {
    const onFinish = (values) => {
        console.log('Success:', values);
        setIsModalVisible(true)

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const [isModalVisible, setIsModalVisible] = useState(false);
      
      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
      <div style={{backgroundColor: '#4c4556', height: '100vh'}}>
        <Header/> <br></br>
        {/* <Carousel/> */}
        <div style={{backgroundColor: 'red', width: '300px', height: '400px'}}>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        
        {/*<Footer/>*/}
        {/*<ContentBoxprofilemid />*/}
      </div>
    )
  }