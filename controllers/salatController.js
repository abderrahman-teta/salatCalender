const salattime = require('../models/salattime')

function addNewDay(req,res) {

    const times = [
        {
            "الفجر":req.body.fajer,
            "الظهر":req.body.doher,
            "العصر":req.body.aser,
            "المغرب":req.body.maghrib,
            "العشاء":"08:45",
        }
    ]
    const prams = new salattime({
        date_hijri :req.body.date_hijri,
        date_miladi : new Date(),
        times :times
    })
    prams.save()
         .then(date =>{
            res.redirect('/') 
         })
         .catch(err =>{
             console.log(err);
             res.send(err)
         })
}

function main(req,res) {
   res.render('index',{title:'thanks'})
}
module.exports = {addNewDay,main}