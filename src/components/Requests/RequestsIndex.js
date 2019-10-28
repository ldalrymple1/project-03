import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class RequestsIndex extends React.Component {
  constructor() {
    super()


    this.state = {
      requests: []
    }

  }

  componentDidMount() {
    axios.get('/api/requests')
      .then(res => this.setState({ requests: res.data }))
      .catch(err => console.log(err))

  
  }

  handleClick(e) {
    console.log(e.target.value)

  }
  
  render() {
    if (!this.state.requests) return null
    console.log(this.state.requests, 're render')
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">REQUESTS</h2>
          {this.state.requests.map((request, i) => (
            <div key={i}>
              <h3><Link className="link" to={`/requests/${request._id}`}>{request.title}</Link></h3>
              <p>{request.framework} * {request.language}</p>
              <p>{request.description}</p>
            </div>
          ))}

        </div>
      </section>
      
    )
  }



}


export default RequestsIndex