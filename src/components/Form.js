import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import createMeme from '../services/UserServices.js';
import '../css/form.css';

export class Form extends Component {
  //Initialize the form element states to empty string
  constructor(props) {
    super(props)
  
    this.state = {
      name:'',
      caption:'',
      url:'',
      show: false
    }
  };
  //OPEN OR CLOSE the form MODAL 
  handleClose = () => {
    this.setState({
      show: false
    })
  };

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  //sets state of each form element on changing the input text
  handleNameChange = (event) => {
      this.setState({
        name:event.target.value
      })
  };

  //sets state of the caption element
  handleCaptionChange = (event) => {
    this.setState({
      caption:event.target.value
    })
  };

  //sets state of the url element
  handleMemeUrlChange = (event) => {
    this.setState({
      url:event.target.value
    })
  };

  componentDidMount() {

  }
  //Function to call service on submit
  handleSubmit = (event) => {
    createMeme(this.state);
    event.preventDefault();
    this.handleClose();
    alert("Meme is posted. Please refresh your page");
  };

  render() {
    return (
      <>
        <Button variant="danger" onClick={this.handleShow}>
          Create Meme
        </Button>
        <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
        animation="true"
        >
          <Modal.Header closeButton>
            <Modal.Title>Post Your Meme Now!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Memer Name*
                <input type="text" placeholder="Type in your Musk Name" value={this.state.name} onChange={this.handleNameChange} required></input>
              </label>
              <label>Caption*
                <input placeholder="Write a funny caption" type="textarea" rows={3} value={this.state.caption} onChange={this.handleCaptionChange} required></input>
              </label>
              <label display='block'>Meme URL*
                <input type='url' placeholder="Enter a valid URL!"value={this.state.url} onChange={this.handleMemeUrlChange} required></input>
              </label>
              <Button display='block' id="btn-submit" variant="primary" type='Submit'>Submit</Button>
            </form>
          </div>
          </Modal.Body>
        </Modal>
        
      </>
    )
  }
}

export default Form
