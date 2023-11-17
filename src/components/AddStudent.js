import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {

    const [data, setData]=useState({
        firstname: "",
        lastname: "",
        gender: ""
    })
    
    // const handleChange =(e)=>{
    //     const {name, value} = e.target;
    //     setData((prev)=>{
    //         return {...prev, [name]: value}
    //     })
    // }

    const handleChange =(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const saveStudent=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/students', data)
        .then(res => {
            toast.success('New student added successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            
        })
        .catch(err => {
            toast.error('An error occurred while adding the record.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });
                
    }

    return (
        <div className='col-md-6 offset-md-3 addStudent'>
            <h3 className='mytext'> Add New student</h3>
            <Form onSubmit={saveStudent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Firstname:</Form.Label>
                    <Form.Control type="input" required onChange={handleChange} 
                    name="firstname"placeholder="Enter Firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="input" required onChange={handleChange}
                    name="lastname" placeholder="Enter Lastname" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select onChange={handleChange} name="gender">
                         <option>--Gender--</option>
                         <option>Male</option>
                         <option>Female</option>
                    </Form.Select>
                </Form.Group>
                    <Button variant="primary" type="submit">
                    Add Student
                    </Button>
                    
                    <ToastContainer/>
            </Form>

        </div>
        
     );
}
 
export default AddStudent;

