import React, { Component } from 'react';
import axios from 'axios';
export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries:[]
        }

    }
    componentDidMount(){
        axios
        .get('http://localhost:3200/countries')
          .then(response => { 
               console.log(response)
               this.setState({
                   countries: response
               });
          })
           .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create Your Trip</h3>
                <div>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Country: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
 
                        <div className="form-group">
                            <label>City: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Initial Date: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Final Date: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Hotel Adress: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Number of Travelers: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Ticket Confirmation: </label>
                            <input type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Destination" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}