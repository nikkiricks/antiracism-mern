import React from 'react';

const DonationSingle = (props) => {
  return ( 
    <div className="row">
      <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
        <span className="card-title">{props.donation.organizationName} ${props.donation.dollarAmount}</span>

        </div>
        <div className="card-content">
          <p>Comment: {props.donation.comment}</p>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default DonationSingle;