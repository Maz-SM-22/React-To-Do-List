const Task = require('../models/Task');
const { NotFoundError } = require('../utils/error');

const renderTaskForm = async (req, res, next) => {
    try {
        const taskId = req.params.id || null;
        if (taskId) {
            const task = await Task.findById(taskId);
            if (!task) {
                throw new NotFoundError(`No task found with id ${taskId}`);
            } else {
                res.json({ task: task });
            }
        } else {
            res.json({ task: null });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { renderTaskForm };
