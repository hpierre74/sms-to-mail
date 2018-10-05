# SMS TO MAIL

A simple node application using a Twilio webhook to get an incoming SMS containing an email address and some content. The message is then processed and forward to the given email address with its content through nodemailer and a Gmail account.

## Getting Started

### Run on your local machine

Clone this repository
`git clone https://github.com/hpierre74/sms-to-mail`

cd into it
`cd sms-to-mail`

Install modules
`yarn install`

Set the ._env_ files with the **GMAILUSER** and **GMAILPASSWORD**

Start the development server
`node index.js`

Proxy your server to use webhook
`ngrok http 3000`

### Twilio Setup

While you can already test the mail part with http POST by changing a few paremeters, you need a valid Twilio Phone Number to get up and running.

**Create a Twilio Account and buy a phone number with your free trial money**

Then, paste your ngrok generated server url specifying your api endpoint into Twilio's SMS messaging webhook spot. It should look something like
`https://567670fa.ngrok.io/sendMail`

## Sending SMS to a mail address

With your mobile phone

- Specify the receiver as your Twilio phone number
- Format your Text as follow:
  `theEmailAddress@any.com/ Lorem ipsum dolor ahmet[...]`
- send it !
