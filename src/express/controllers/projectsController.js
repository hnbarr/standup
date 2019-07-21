const { ProjectsModel } = require('../../mongo/models');

module.exports.list = (req, res) => {
    ProjectsModel.find({ }).exec().then(projects => {
        return res.json(projects)
    })
}

module.exports.show = (req, res)=>{
    ProjectsModel.findById(req.params.id).exec().then(project =>{
        return res.json(project)
    })
}

module.exports.create = (req, res)=>{
    const p = new ProjectsModel({
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
        logs: req.body.logs
    });
    p.save().then(savedProject => {
        return res.json(savedProject)
    })
}

module.exports.update = (req, res)=>{
    ProjectsModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, updateProject)=>{
            if(err) return res.status(500).send(err);
            return res.send(updateProject)
        }
    )
}

module.exports.remove = (req, res)=>{
    ProjectsModel.findByIdAndRemove(req.params.id, (err, project)=>{
        if(err) return res.status(500).send(err)
        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "project successfully deleted",
            id: project._id
        }
        return res.status(200).send(response);
    });
}