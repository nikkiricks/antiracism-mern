import { addNewDonation, getDonations, getDonationWithID, updateDonation, deleteDonation } from '../controllers/antiracismController'

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
    
}
// export it!
export default routes;