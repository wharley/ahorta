const sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY)

const Notify = {
    sensor: (value) => {
      return sendgrid.API(sendgrid.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
          personalizations: [
            {
              to: [
                {
                  email: 'alexanmtz@gmail.com',
                },
              ],
              subject: 'We made a new measure on your plant'
            },
          ],
          from: {
            email: 'sensor@ahorta.com'
          },
          content: `The humidity value is ${value}`
        },
    }))
  }
}

module.exports = Notify