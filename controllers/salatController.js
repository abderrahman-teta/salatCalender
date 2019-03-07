
function addNewDay(req,res) {
    const prams = new salattime({
        date_hijri :req.body.date_hijri,
        date_miladi : req.body.date_miladi,
        times :req.body.times
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