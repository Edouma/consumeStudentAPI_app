import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


const AddStudent = () => {
    const saveStudent=()=>{
        axios.post('http://localhost:4000/students')
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='col-md-6 offset-md-3 addStudent'>
            <h3 className='mytext'> Add New student</h3>
            <Form onSubmit={saveStudent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Firstname:</Form.Label>
                    <Form.Control type="input" placeholder="Enter Firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="input" placeholder="Enter Lastname" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control type="input" placeholder="Password" />
                </Form.Group>
                    <Button variant="primary" type="submit">
                Add Student
                </Button>
            </Form>

        </div>
        
     );
}
 
export default AddStudent;

