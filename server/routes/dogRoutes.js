const express = require ("express");
const router = express.Router();
const dogModels = require ('../models/dogModels')

//Get ALL DOG || @GET REQUEST
router.get('/getAllDogs', async (req,res) => {
    try {
        const dogs = await dogModels.find({})
        res.send(dogs)
        
    } catch (error) {
        res.json({message:error})
    }
})


router.post('/adddog', async (req,res) => {
    const {dogs} = req.body
    try {
        const newDog = new dogModels({
            title : dogs.title,
            urlToImage : dogs.urlToImage,
            description: dogs.description,
            price : dogs.price,
            breed : dogs.breed
            
        })

        await newDog.save()
        res.status(201).send ('New Pizza Added')

    } catch (error) {
        res.json({message:error})
    }
})


module.exports = router;