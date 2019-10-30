const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 's.maitland@me.com',
        subject: 'Thanks for signing up',
        text: `Welcome to the App, ${name}. Let me know how you get on with the app.`
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 's.maitland@me.com',
        subject: 'Sorry to see you go',
        text: `Farewell, ${name}. Let me know if there was anything I can do to get you to sign up again.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};