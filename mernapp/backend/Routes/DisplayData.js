const express = require('express')
const router = express.Router()

router.post('/foodData', (req,res)=>{
    try {
        console.log(global.foodData)
        res.send([global.foodData,global.foodcategory])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;