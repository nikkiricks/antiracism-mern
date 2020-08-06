import React from 'react';

const DonationList = (props) => {
  return ( 
  <div>
    <ul className="collection with-header">
      <li className="collection-header"><h4>Donations</h4></li>
      {props.donations.map((item) => (
        <a href="#!" className="collection-item" key={item._id}
        onClick={props.updateCurrentDonation.bind(this,item)}>{item.organizationName}  {item.dollarAmount}</a>
      ))}
    </ul>
  </div> );
}
 
export default DonationList;