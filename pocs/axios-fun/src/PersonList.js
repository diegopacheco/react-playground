import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
            <div name="listDiv" 
                style={{left: '40%', top: '10%', 
                    float: 'center',
                    position: 'absolute',
                  }} >
            <p>Person List from Axios remote call:</p>    
            <div name="itemsDiv" 
                style={{
                    textAlign: 'left',
                    fontSize: '150%',
                    listStyleType: 'none',
                    margin: '20px auto',
                    padding: '0px',
                    border: 'solid 1px #666666',
                }}
            >
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>          
            </div>    
        </div>
    )
  }
};