import React from 'react';
import axios from 'axios'
import './App.css';
import DonationList from './Donation/DonationList'
// import DonationSingle from './Donation/DonationSingle'
import DonationForm from './Donation/DonationForm'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donations: [],
      currentDonation: {},
    }
  
    this.updateCurrentDonation = this.updateCurrentDonation.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:4000/donations'

    axios.get(url, { crossdomain: true })
      .then((Response) => {
        this.setState({
          donations: Response.data
        })
      })
      .catch((error) =>
      console.log(error))
  }

  updateCurrentDonation(item) {
    this.setState({
      currentDonation: item,
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo">Antiracism Work</a>
          </div>
        </nav>
        </div>
        <div className="row">
          <div className="col s3"><DonationList donations={this.state.donations}
            updateCurrentDonation={this.updateCurrentDonation}/>
          </div>
          {/* <div className="col s9"><DonationSingle donation={this.state.currentDonation}/></div> */}
        </div>
        <div className="row">
          <div className="col s12"><DonationForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
