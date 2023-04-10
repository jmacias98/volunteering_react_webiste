const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const VolunteerModel = require("./models/Volunteer")

app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb+srv://kevint:l2LW1KjjEGYQqpmq@volunteer.bjtt46h.mongodb.net/volunteer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
    const volunteerName = req.body.volunteerName
    const volunteerDate = req.body.volunteerDate

    const volunteer = new VolunteerModel({volunteerName: volunteerName, volunteerDate: volunteerDate});

    try {
        await volunteer.save();
        res.send("inserted data")
    } catch (err) {
        console.log(err);
    }
});


app.get("/read", async (req, res) => {
    // Empty bracket returns everything inside database. Use .find($where: volunteerName: "<INSERT VOLUNTEER GROUP NAME>" to filter)

    
    VolunteerModel.find({}, (err, result) => {
        if (err){
            res.send(err);
        }
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});