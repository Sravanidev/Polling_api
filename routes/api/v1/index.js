const express=require('express')
const router=express.Router()

// this is the entry point of all the api/v1/questions named url's
router.use('/questions',require('./questions'));
// router.use('/options',require('./options'))

module.exports=router
