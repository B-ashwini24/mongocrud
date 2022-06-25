import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'

const Products = () => {
  const onFinish = (values) => {
axios.post(`http://localhost:4000/Product/`,values).then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err)
})

    console.log('Success:', values);
  };

  
  return (
    <>
    <h1>Enter Product Details</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input Product name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input Price!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[{ required: true, message: 'Please input Quantity!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: 'Please input Brand!' }]}
      >
        <Input />
      </Form.Item>
     

     
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default Products
