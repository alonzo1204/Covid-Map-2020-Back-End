const node_cron = require('node-cron');
module.exports = {
    validaterNodeCron : (time,func) => (  (req,res) =>{
        node_cron.schedule(time, () => {
            try {
                func(req, res);
            } catch (error) {
                res.status(500).json(error)
            }
        })
        res.status(201).json({status:'Crone: '+ time});
    })
}