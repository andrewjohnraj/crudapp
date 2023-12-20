
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Model(props) {
  console.log(props)
  function update(){
      console.log(props);
        fetch(`https://655f2ea2879575426b44c299.mockapi.io/student_data_crud_app/students_Data/${props.modelTempt.id}`,
         {
  method: "put",
  headers: {'content-type':'application/json'},
  body:JSON.stringify(props.modelTempt)
  //body:JSON.stringify({name:`mohn`})
}).then(()=>{
  props.setValue(!props.value)
})
props.modelClose()
 
};
const newUser=()=>{
  fetch('https://655f2ea2879575426b44c299.mockapi.io/student_data_crud_app/students_Data/',{
    method:'post',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(props.modelTempt)
  } ).then(res=>{
    if(res.ok){
      return res.json();
    }
    //handle error
  }).then(task=>{
    //do somthing with the new task
  }).catch(error=>{
    //handle error
  }).then(()=>{
    props.setValue(!props.value);
  })
  props.modelClose();
}

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.moadlShow} onHide={props.modelClose}size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name"
                autoFocus
                defaultValue={props.modelTempt.name}
                onChange={(e)=>props.setModaltemp({...props.modelTempt,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={props.modelTempt.emailid}
                onChange={(e)=>props.setModaltemp({...props.modelTempt,emailid:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone no</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter phone no"
                autoFocus
                defaultValue={props.modelTempt.phoneNo}
                onChange={(e)=>props.setModaltemp({...props.modelTempt,phoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter the qualification"
                autoFocus
                defaultValue={props.modelTempt.qualification}
                onChange={(e)=>props.setModaltemp({...props.modelTempt,qualification:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the place"
                autoFocus
                defaultValue={props.modelTempt.location}
                onChange={(e)=>props.setModaltemp({...props.modelTempt,location:e.target.value})}
              />
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.modelClose}>
            Close
          </Button>
          {props.modelTempt.id==="" ?<Button variant="success" onClick={newUser}>Insert Data</Button>:
          <Button variant="primary" onClick={update}>
            Save Changes
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;