const { StatsModel } = require('../../mongo/models');

module.exports.list = (req, res) => {
    StatsModel.find({ }).exec().then(stats => {
        return res.json(stats)
    })
}

module.exports.update = (req, res)=>{
    StatsModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, updateStat)=>{
            if(err) return res.status(500).send(err);
            return res.send(updateStat)
        }
    )
}

module.exports.reset = (req, res)=>{
    StatsModel.findByIdAndUpdate(
        req.params.id, 
        {stat: 0},
        {new: true},
        (err, updateStat)=>{
            if(err) return res.status(500).send(err)
            return res.send(updateStat)
        })
}