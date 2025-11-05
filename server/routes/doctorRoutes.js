const express = require("express");
const router = express.Router();
const doctorModels = require("../models/doctorModels");

//Get ALL doctor || @GET REQUEST
router.get('/getAllDoctors', async (req,res) => {
    try {
        const doctors = await doctorModels.find({})
        res.send(doctors)
        
    } catch (error) {
        res.json({message:error})
    }
})


router.post('/adddoctor', async (req,res) => {
    const {doctor} = req.body
    try {
        const newDoctor = new doctorModels({
            name : doctor.name,
            image : doctor.image,
            description: doctor.description,
            price : doctor.price,
            education : doctor.education,
            experience : doctor.experience,
            phone : doctor.phone
            
        })

        await newDoctor.save()
        res.status(201).send ('New doctor Added')

    } catch (error) {
        res.json({message:error})
    }
})


module.exports = router;
