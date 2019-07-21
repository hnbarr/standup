const { LogsModel } = require('../../mongo/models');

module.exports.list = (req, res) => {
    LogsModel.find({ projectId: req.params.id }).exec().then(logs => {
        return res.json(logs)
    })
}

module.exports.show = (req, res)=>{
    ProjectsModel.findById(req.params.id).exec().then(log =>{
        return res.json(log)
    })
}

module.exports.create = (req, res)=>{
    const l = new LogsModel({
        title: req.body.title,
        tag: req.body.tag,
        description: req.body.description,
        date: req.body.date
    });
    l.save().then(savedLog => {
        return res.json(savedLog)
    })
}

module.exports.update = (req, res)=>{
    LogsModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, updateLog)=>{
            if(err) return res.status(500).send(err);
            return res.send(updateLog)
        }
    )
}

module.exports.remove = (req, res)=>{
    LogsModel.findByIdAndRemove(req.params.id, (err, log)=>{
        if(err) return res.status(500).send(err)
        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "log successfully deleted",
            id: log._id
        }
        return res.status(200).send(response);
    });
}