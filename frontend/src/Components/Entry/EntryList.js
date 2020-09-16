import React from 'react';

const EntryList = (props) => {
  return ( <div>
    <h4>Daily Entries</h4>
    <ul className="collection">
      {props.entries.map((item) => (
        <div className="collection-item" key={item._id}
      onClick={props.updateCurrentEntry.bind(this,item)}>{item.created_date.split('T')[0]} - {item.entry}
      </div> 
      ))}
    </ul>

  </div> );

}
 
export default EntryList;