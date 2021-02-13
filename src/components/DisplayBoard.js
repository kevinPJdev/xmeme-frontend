import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../css/displayboard.css';

export class  DisplayBoard extends Component {

  state = {
    meme:[]
  }

  async componentDidMount() {
    const response= await fetch('/api/memes');
    const data = await response.json();
    this.setState({meme: data});
    console.log(this.state.meme);
  }
  render() {
    return (
        <div className="display">
           {this.state.meme.map((memes,index) => (
            <div key={index}>
              <Card style={{ width: '18rem', height: '25rem'}} border="light" bg="dark" text="light">
                <Card.Title>{memes.username}</Card.Title>
                <Card.Img variant="top" src={memes.url} />
                <Card.Body> 
                  <Card.Text>
                   {memes.caption}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
            </div>))}
        </div>
    )
  }
}

export default DisplayBoard
