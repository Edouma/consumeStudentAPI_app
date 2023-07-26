import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
      };

    const handlePassword =(e)=>{
        setPassword(e.target.value);
    }

    const loginUser = async(e)=>{
        e.preventDefault()
        try {    
        const response = await axios.post('http://localhost:4000/auth/login', {email, password} ) 
        
        if (response.status === 200) {
    
            const { accessToken, refreshToken } = response.data;
            
            // Save access_token in session storage
            sessionStorage.setItem('access_token', accessToken);
            sessionStorage.setItem('refresh_token', refreshToken);

            // Redirect or perform any other action upon successful login
            window.location.href = '/'; // Change the URL to your desired route
          } else {
            const errorResponse = await response.json();
            setError(errorResponse.message);
          }
            
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
        
    }
    return ( 
        <div className='form-content'>
             <h4 align="center"> Login </h4>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value ={email} required onChange={handleEmail} placeholder="Enter email" 
                    name="email"/>
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} required onChange={handlePassword} placeholder="Password" 
                    name="password"/>
                </Form.Group>
                    {error && <p className="text-danger">{error}</p>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
       
     );
}
 
export default Login;