import React, { Component } from 'react';
import {Table} from "reactstrap"
class Invoice extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='pl-5 ml-5' >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th> Date</th>
                            <th>Name</th>
                            <th>Rupees</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1/05/2021</td>
                            <td>vatsal</td>
                            <td>$1200</td>
                            <td>paid</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>8/06/2021</td>
                            <td>Sharaf</td>
                            <td>$600</td>
                            <td>pending</td>
                        </tr>

                        <tr>
                            <td>{this.props.Id}</td>
                            <td>{this.props.date}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.rupees}</td>
                            <td>{this.props.status}</td>
                        </tr>

                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Invoice;