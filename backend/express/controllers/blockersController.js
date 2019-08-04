const { BlockersModel } = require('../../mongo/models');

module.exports.list = (req, res) => {
    console.log('listblockers req.body ', req.body)
    BlockersModel.find({ }).exec().then(blockers => {
        return res.json(blockers)
    })
}

module.exports.create = (req, res)=>{
    const b = new BlockersModel({
        blocker: req.body.blocker,
        date: req.body.date
    });
    b.save().then(savedBlocker => {
        return res.json(savedBlocker)
    })
}

module.exports.update = (req, res)=>{
    BlockersModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, updateBlocker)=>{
            if(err) return res.status(500).send(err);
            return res.send(updateBlocker)
        }
    )
}

module.exports.remove = (req, res)=>{
    BlockersModel.findByIdAndRemove(req.params.id, (err, blocker)=>{
        if(err) return res.status(500).send(err)
        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "blocker successfully deleted",
            id: blocker._id
        }
        return res.status(200).send(response);
    });
}