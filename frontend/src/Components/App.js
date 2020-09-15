import React from 'react';
import axios from 'axios'
import './App.css';
import DonationList from './Donation/DonationList'
import DonationForm from './Donation/DonationForm'
import EntryList from './Entry/EntryList'
import EntryForm from './Entry/EntryForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donations: [],
      currentDonation: {},
      entries: [],
      currentEntry: {}
    }
  
    this.updateCurrentDonation = this.updateCurrentDonation.bind(this)
    this.updateCurrentEntry = this.updateCurrentEntry.bind(this)

  }

  componentDidMount() {
    const urlDonations = 'http://localhost:4000/donations'
    const urlEntries = 'http://localhost:4000/entries'


    axios.get(urlDonations, { crossdomain: true })
      .then((Response) => {
        this.setState({
          donations: Response.data
        })
      })
      .catch((error) =>
      console.log(error))
    
    axios.get(urlEntries, { crossdomain: true })
      .then((Response) => {
        this.setState({
          entries: Response.data
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

  updateCurrentEntry(item) {
    this.setState({
      currentEntry: item,
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
          <div className="col s10"><DonationList donations={this.state.donations}
            updateCurrentDonation={this.updateCurrentDonation}/>
          </div>
        </div>
        <div className="row">
          <div className="col s10"><DonationForm /></div>
        </div>
        <div className="row">
          <div className="col s10"><EntryList entries={this.state.entries}
          updateCurrentEntry={this.updateCurrentEntry}/>
          </div>
        </div>
        <div className="row">
          <div className="col s10"><EntryForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
