import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jsonData: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    jsonData: json
                })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <h3>Home Page</h3>
                <div>
                    <h4>Jsonplaceholder data</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jsonData.map((data, Index) => (
                                    <tr key={Index}>
                                        <td>{data.id}</td>
                                        <td><h5>{data.title}</h5></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
