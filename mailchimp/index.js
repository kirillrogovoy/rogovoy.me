'use strict';
const Mailchimp = require('mailchimp-api-v3');
const crypto = require('crypto');

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

exports.handler = async (event, context) => {
    if (event.httpMethod === 'OPTIONS') {
      return response(200, '');
    }

    const data = JSON.parse(event.body);
    const emailAddress = data.email;
    const emailMD5 = crypto.createHash('md5').update(emailAddress).digest("hex");

    try {
        const mailchimpRes = await mailchimp.put(`lists/${process.env.MAILCHIMP_LIST_ID}/members/${emailMD5}`, { email_address: emailAddress, status: 'pending' })
        return response(200);
    } catch (e) {
        return response(400, e.title);
    }
};

function response(statusCode, message) {
    return {
      statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(message),
    }
}
