import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destinations: []
        }


    }
    componentDidMount() {
        let destinationList = this.props.destinations || [];
    }


    render() {  
        let goingTo = this.props.destinations
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">City</th>
                        <th scope="col">Period</th>

                    </tr>
                </thead>
                <tbody>
                {this.props.destinations.map((desti,index) => 
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{desti.country}</td>
                        <td>{desti.city}</td>
                        <td>{desti.initialDate}-{desti.endDate}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        )
    }
}