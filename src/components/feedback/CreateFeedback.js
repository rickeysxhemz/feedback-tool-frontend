import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import AlertMessage from '../alerts';
import { baseUrl } from '../../BaseUrl';

function CreateFeedback({ show, onHide ,updateFeedbackList}) {

  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });



  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`${baseUrl}/api/feedback/create`, formData)
      .then(res => {
       AlertMessage('success', res.data._metadata.message);
       
       setFormData({
        title: '',
        description: '',
        category: '',
      });

        onHide();
        updateFeedbackList();
      })
      .catch(err => {
        AlertMessage('error', err.response.data.errors);
        
      });
  }

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Create Feedback</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control 
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                />
            </Form.Group>
            
            
          
          
          <Button style={{marginTop:'20px'}} variant="primary" type="submit">
            Submit Feedback  
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );

}
export default CreateFeedback;
