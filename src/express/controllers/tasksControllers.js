const { TasksModel } = require('../../mongo/models');

module.exports.list = (req, res) => {
    TasksModel.find({ }).exec().then(tasks => {
        return res.json(tasks)
    })
}

module.exports.create = (req, res)=>{
    const t = new TasksModel({
        task: req.body.task,
        date: req.body.date
    });
    t.save().then(savedTask => {
        return res.json(savedTask)
    })
}

module.exports.update = (req, res)=>{
    TasksModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, updateTask)=>{
            if(err) return res.status(500).send(err);
            return res.send(updateTask)
        }
    )
}

module.exports.remove = (req, res)=>{
    TasksModel.findByIdAndRemove(req.params.id, (err, task)=>{
        if(err) return res.status(500).send(err)
        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "task successfully deleted",
            id: task._id
        }
        return res.status(200).send(response);
    });
}