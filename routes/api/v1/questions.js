const express=require('express')
const router=express.Router()

const question_controller = require('../../../controllers/api/v1/question_controller')

router.post('/create',question_controller.create)
router.get('/view/:id',question_controller.showDetails)
router.delete('/delete/:id',question_controller.deleteQuestion)
router.use('/options', require('./options')); // Mount options routes under /questions/:id/options



module.exports=router