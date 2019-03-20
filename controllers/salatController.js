const salattime = require('../models/salattime')

const dateFormat = require('dateformat')


function addNewDay(req,res) {

    const date =new Date()
    
    const times = [
        {
            "الفجر":req.body.fajer,
            "الشروق":req.body.shou,
            "الظهر":req.body.doher,
            "العصر":req.body.aser,
            "المغرب":req.body.maghrib,
            "العشاء":req.body.ishaa,
        }
    ]
    const prams = new salattime({
        date_hijri :req.body.date_hijri,
        date_miladi : date,
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