const mongoose = require('mongoose')

const VolunteerSchema = new mongoose.Schema({
    volunteerName: {
        type: String,
        required: true,
    },
    volunteerDate: {
        type: Date,
        required: true,
    },
});

const Volunteer = mongoose.model("Volunteer", VolunteerSchema)
module.exports = Volunteer