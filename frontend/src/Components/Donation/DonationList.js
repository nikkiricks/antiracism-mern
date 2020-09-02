import React from 'react';

const DonationList = (props) => {
  return ( 
  <div>

    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Card Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <p>Dollar</p>
          </div>
        </div>
      </div>
    </div>

    <ul className="collection with-header">
      <li className="collection-header"><h4>Donations</h4></li>
      {props.donations.map((item) => (
        <a href="#!" className="collection-item" key={item._id}
      onClick={props.updateCurrentDonation.bind(this,item)}>{item.organizationName} - ${item.dollarAmount}</a>
      ))}
    </ul>
      <h5>Total: $ {props.donations.reduce((totalDonations, donation) => totalDonations + donation.dollarAmount, 0)}</h5>
  </div> 
 );
}

 
export default DonationList;