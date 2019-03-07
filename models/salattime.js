const mongoose = require('mongoose')

const salatTimeSchema = new mongoose.Schema({
    date_hijri:String,
    date_miladi:Date,
    times :[]
})

const salattime = module.exports = mongoose.model('salattime',salatTimeSchema);