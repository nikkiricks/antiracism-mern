import { addNewDonation, getDonations, getDonationWithID, updateDonation, deleteDonation, addNewEntry, getEntries, updateEntry, deleteEntry } from '../controllers/antiracismController'

const routes = (app) => {
  //create route for donations
  app.route('/donations')
    //create get request
    .get(getDonations)
    //create post request
    .post(addNewDonation);

  // create a new route so you can get these donation entries by their ID's  
  app.route('/donations/:donationID')
    .get(getDonationWithID)

    .put(updateDonation)

    .delete(deleteDonation)

  app.route('/entries')
    //create get request
    .get(getEntries)
    //create post request
    .post(addNewEntry);

  app.route('/entries/:entryID')
    //create put request
    .put(updateEntry)
    //create delete request
    .delete(deleteEntry)
    
}
// export it!
export default routes;