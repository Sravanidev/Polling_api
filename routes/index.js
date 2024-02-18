const express=require('express')
const router=express.Router()
const allQuestions_controller = require('../controllers/api/v1/question_controller');

router.get('/allquestions', allQuestions_controller.getAllQuestions);
router.use('/api',require('./api'));

module.exports=router