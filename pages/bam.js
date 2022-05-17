import React from "react";
import { Form, InputNumber, Button } from "antd";

export default function bam() {
  const [first, setfirst] = React.useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    const result = values.num1 + values.num2
    console.log('result', result)
    setfirst(result)
  };
  return (
    <div>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="num1"
          name="num1"
          rules={[{ required: true, message: "Please input your number!" }]}
        >
          <InputNumber min={1} max={10000} />
        </Form.Item>

        <Form.Item
          label="num2"
          name="num2"
          rules={[{ required: true, message: "Please input your number!" }]}
        >
          <InputNumber min={1} max={10000} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <h1>{first}</h1>
    </div>
  );
}
