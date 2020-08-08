import React from 'react';

const DonationList = (props) => {
  return ( 
  <div>
    <ul className="collection with-header">
      <li className="collection-header"><h4>Donations</h4></li>
      {props.donations.map((item) => (
        <a href="#!" className="collection-item" key={item._id}
        onClick={props.updateCurrentDonation.bind(this,item)}>{item.organizationName} </a>
      ))}
    </ul>

    <table>
  <thead>
    <tr>
        <th>Organization Name</th>
        <th>Money Donation</th>
        <th>Comment</th>
    </tr>
  </thead>

  <tbody>
    <tr>
    {props.donations.map((item) => (
        <td className="collection-item" key={item._id}
        onClick={props.updateCurrentDonation.bind(this,item)}>{item.organizationName} </td>
      ))}
    </tr>
  </tbody>
  </table>
  </div> 
 );
}

 
export default DonationList;