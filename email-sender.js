// 
var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'ybenhamida@ec-tunis.com',
        pass : ''
    }
})

var mailOptions = {
    from : 'ybenhamida@ec-tunis.com',
    to : 'youssefbenhamidaaa@gmail.com',
    subject : 'aa winek?',
    text : ' twa7achtek'
}

transporter.sendMail(mailOptions,function(error,info){
    error ? console.log(error):console.log('Email sent: '+ info.response)})