import { Space, Table, Tag,Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';




const Show = () => {
    const [data,setData]=useState([])
    const [ismodelvisible,setIsmodelvisible]=useState(false)
    const [ismodelvisible1,setIsmodelvisible1]=useState(false)
    const [editdata,setEditdata]=useState({
      name:"",
      quantity:""

})
    
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Action',
    key: '_id',
    render: (row, record) => (
      <Space size="middle">
        
       <Button type='primary' onClick={()=>EditData(row)}>Edit </Button>
      </Space>
    ),
  },
  {
    title: 'Action',
    key: '_id',
    render: (row, record) => (
      <Space size="middle">
       
       <Button type="primary" onClick={()=>deletedata(row._id)}>delete</Button>
      </Space>
    ),
  },
];
const handleEditChange=(event)=>{
  setEditdata({...editdata,[event.target.name]:event.target.value})
}
const EditData=(data)=>{
setEditdata({
  name:data.name,
  quantity:data.quantity,
  _id:data._id
})
}
const deletedata=(id)=>{
  axios.delete(`http://localhost:4000/Product/delete/${id}`).then(response=>{
    console.log("data deleted")
    setIsmodelvisible(!ismodelvisible)
  }).catch(err=>{
    console.log(err)
  })
  
}
const handleok=()=>{
  axios.put(`http://localhost:4000/Product/edit`,editdata).then(response=>{
    console.log("updated")
    setIsmodelvisible1(!ismodelvisible1)
  }).catch(err=>{
    console.log(err)
  })
}

    useEffect(()=>{
        axios.get(`http://localhost:4000/Product/getproducts`).then(response=>{
            console.log(response.data)
            setData(response["data"].data)
        }
        ).catch(err=>{
            console.log(err)
        })
    },[ismodelvisible,ismodelvisible1])

   
    return(
        
       <div style={{marginLeft:'100px',marginTop:'100px'}}>  
       <h1>Products Details</h1>
      <Row >
      <Col span={6} offset={6}>
    <Table columns={columns} dataSource={data} />
    </Col>
    
    </Row>
    <p><Input placeholder="Name" name='name' value={editdata.name}  onChange={handleEditChange} /></p>
    <p><Input placeholder="Quantity"   name='emailid' value={editdata.quantity} onChange={handleEditChange} /></p>
  <p><Button type="primary" onClick={handleok}>edit data</Button></p>
  </div> 
    )
    }


export default Show;