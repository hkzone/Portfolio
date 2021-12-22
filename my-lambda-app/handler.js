const AWS = require('aws-sdk');

const SES = new AWS.SES();

const Response = (code, data) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': process.env.DOMAIN,
  },
  statusCode: code,
  body: JSON.stringify(data),
});

module.exports.send = async (event) => {
  const { email, name, content } = JSON.parse(event.body);
  if (!email || !name || !content) {
    return Response(400, {
      message: 'email, name, content  are all required in the body',
    });
  }

  const params = {
    Destination: {
      ToAddresses: [process.env.EMAIL],
    },
    Message: {
      Body: {
        Text: { Data: content },
      },
      Subject: { Data: `A new message from your website from ${name}` },
    },
    Source: process.env.EMAIL,
    ReplyToAddresses: [email],
  };

  try {
    await SES.sendEmail(params).promise();
    return Response(200, {
      message: 'success',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error sending email ', error);
    return Response(400, {
      message: 'The email failed to send',
    });
  }
};
