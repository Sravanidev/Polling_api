const Option = require('../../../models/option');
const Question = require('../../../models/questions');

module.exports.create = async function(req, res) {
    try {
        const option = await Option.create({
            option: req.body.option,
            question: req.params.id,
        });

        const question = await Question.findById(req.params.id);
        if (question) {
            question.options.push(option);
            await question.save();
            res.status(201).json({
                message: 'Option added successfully',
                option: option
            });
        } else {
            res.status(404).json({ error: 'Question not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.addVote = async function(req, res) {
    try {
        const option = await Option.findById(req.params.id);
        if (option) {
            option.vote += 1;
            await option.save();
            res.json(option);
        } else {
            res.status(404).json({ error: 'Option not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.delete = async function(req, res) {
    try {
        const option = await Option.findById(req.params.id);
        if (option) {
            const questionId = option.question;
            const question = await Question.findById(questionId);
            if (question) {
                question.options.pull(req.params.id);
                await question.save();
            }
            await Option.findByIdAndDelete(req.params.id);
            res.json({ message: 'Option deleted successfully' });
        } else {
            res.status(404).json({ error: 'Option not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
