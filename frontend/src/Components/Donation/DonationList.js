import React from 'react';

const DonationList = (props) => {
  return ( 
  <div>
    <h4>Donations</h4>
    <ul className="collection">
      {props.donations.map((item) => (
        <div className="collection-item" key={item._id}
      onClick={props.updateCurrentDonation.bind(this,item)}>{item.organizationName} - ${item.dollarAmount}
      <li>
        {item.comment}
      </li>
      </div> 
      ))}
    </ul>
      <h5>Total: $ {props.donations.reduce((totalDonations, donation) => totalDonations + donation.dollarAmount, 0)}</h5>
  </div> 
 );
}

 
export default DonationList;