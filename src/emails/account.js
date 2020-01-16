const sgMail= require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email, name) =>{
    sgMail.send({
        to: email,
        from:'lwilson@germblast.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail= (email, name) => {
    sgMail.send({
        to: email,
        from: 'lwilson@germblast.com',
        subject: 'Sorry to see you go',
        text: `${name} your account has been cancelled , anything we could have done to change your mind?`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancelEmail
}