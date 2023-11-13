import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import AlertMessage from './components/alerts';
import { baseUrl } from './BaseUrl';

function RegisterModal({ show, onHide }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '' 
  });
 console.log(formData);
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${baseUrl}/api/auth/register`, formData)
      .then(res => {
       AlertMessage('success', res.data._metadata.message);
        onHide();
      })
      .catch(err => {
        AlertMessage('error', err.response.data.errors);
        
      });
  }

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="formPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control 
                type="password"
                value={formData.password_confirmation}
                onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
                />
            </Form.Group>

          
          
          <Button style={{marginTop:'20px'}} variant="primary" type="submit">
            Register  
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );

}
export default RegisterModal;
