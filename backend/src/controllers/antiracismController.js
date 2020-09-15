import mongoose from 'mongoose';
import { DonationSchema, EntrySchema } from '../models/antiracismModel'

const Donation = mongoose.model('Donations', DonationSchema);
const Entry = mongoose.model('Entries', EntrySchema);

export const addNewDonation = (req,res) => {
  let newDonation = new Donation(req.body);

  newDonation.save((err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json(donation)
  })
}

export const getDonations = (req,res) => {
  Donation.find({}, (err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json(donation)
  })
}

export const getDonationWithID = (req,res) => {
  Donation.findById(req.params.donationID, (err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json(donation)
  })
}

export const updateDonation = (req,res) => {
  Donation.findOneAndUpdate({ _id: req.params.donationID }, req.body, { new: true, useFindAndModify: false }, (err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json(donation)
  })
}

export const deleteDonation = (req,res) => {
  Donation.deleteOne({ _id: req.params.donationID }, (err, donation) => {
    if (err) {
      res.send(err)
    }
    res.json({message: "successfully deleted donation"})
  })
}

//entries
export const addNewEntry = (req,res) => {
  let newEntry = new Entry(req.body);

  newEntry.save((err, entry) => {
    if (err) {
      res.send(err)
    }
    res.json(entry)
  })
}

export const getEntries = (req,res) => {
  Entry.find({}, (err, entry) => {
    if (err) {
      res.send(err)
    }
    res.json(entry)
  })
}
