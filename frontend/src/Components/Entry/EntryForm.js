import React from 'react';
import axios from 'axios';

class EntryForm extends React.Component {
  submitEntry(event) {
    event.preventDefault()

    axios.post('http://localhost:4000/entries', {
      entry: this.refs.entry.value,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() { 
    return ( 
      <div className="row">
        <h4 className="center">Add daily entry</h4>
        <form className="col s12" onSubmit={this.submitEntry.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="entry" ref="entry" type="text"/>
              <label htmlFor="entry">Daily entry</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add entry</button>
        </form>
    </div> );
  }
}
 
export default EntryForm;