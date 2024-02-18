const Question = require('../../../models/questions');
const Option = require('../../../models/option');

module.exports.create = async function(req, res) {
    try {
        const question = await Question.create(req.body);
        res.status(201).json({
            message: 'Question created successfully',
            question: question
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            error: "Error in creating the question" 
        });
    }
}
module.exports.showDetails = async function(req, res) {
    try {
        const ques = await Question.findById(req.params.id).populate('options');
        if (ques) {
            res.json(ques);
        } else {
            res.status(404).json({ error: "Question not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error in fetching question details" });
    }
}

module.exports.deleteQuestion = async function(req, res) {
    try {
        const ques = await Question.findById(req.params.id);
        if (ques) {
            await Question.deleteOne({ _id: req.params.id });
            await Option.deleteMany({ question: req.params.id });
            res.json({ message: "Question deleted successfully" });
        } else {
            res.status(404).json({ error: "Question does not exist" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error in deleting question" });
    }
}

// Controller function to fetch all questions
module.exports.getAllQuestions = async function(req, res) {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching questions" });
    }
};
