import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Model from './model';
import { IoIosAddCircle } from "react-icons/io";
function Crud(){
  const[apiData,setApiData]=useState([]);
  const[value,setValue]=useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [temp,settemp] =useState({
    id:"",
    name:"",
    emailid:"",
    phoneNo:"",
    qualification:"",
    location:""
  })
  // const handleShow = () => setShow(true);
const editdata=(data)=>{
  setShow(true)
  settemp({id:data.id,name:data.name,emailid:data.emailid,phoneNo:data.phoneNo,qualification:data.qualification,location:data.location})
  console.log(data.name)
}
// create user
const createUser=(data)=>{
  setShow(true);
  settemp({
    id:"",
    name:"",
    emailid:"",
    phoneNo:"",
    qualification:"",
    location:""
    
  })
};
// delete user
const deleteUser=(flim)=>{
  fetch(`https://655f2ea2879575426b44c299.mockapi.io/student_data_crud_app/students_Data/${flim.id}`,{
    method:"delete"
  }).then(res=>{
    if(res.ok){
      return res.json();
    }
    //handle error
  }).then(task =>{
    //do something with deleted task
  }).then(error =>{
    //handle error
  }).then(()=>{
    setValue(!value);
  })
}

    useEffect(()=>{
      const apiCall=
        fetch('https://655f2ea2879575426b44c299.mockapi.io/student_data_crud_app/students_Data',
         {
  method: 'GET',
  headers: {'content-type':'application/json'},
  //body:JSON.stringify({name:`mohn`})
}
);
const data=apiCall.then((gem)=>gem.json());
data.then((items)=>{
  setApiData(items);
  // console.log(items);
});

    },[value])
    // console.log(apiData);  
    return(
        <>
        <h1>crud</h1>
        <Table striped="columns">
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>First Name</th>
          <th>Email ID</th>
          <th>Phone Number</th>
          <th>qualification</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      {apiData.map((detail,index)=>{
        return(
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{detail.name}</td>
          <td>{detail.emailid}</td>
          <td>{detail.phoneNo}</td>
          <td>{detail.qualification}</td>
          <td>{detail.location}</td>
          <td><Button variant="outline-dark" onClick={()=>editdata(detail)}>Edit</Button> <button className="btn btn-danger" onClick={()=>deleteUser(detail)}>Delete</button></td>
        </tr>
      </tbody>
        )
      })
    }
    </Table>
    
    <Model moadlShow={show} modelClose={handleClose} modelTempt={temp} setModaltemp={settemp} setValue={setValue} value={value}/>
    <span className="addUser" onClick={createUser}><IoIosAddCircle /></span>
        </>
    )
}

export default Crud;