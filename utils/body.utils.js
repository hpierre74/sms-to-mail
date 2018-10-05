const getBody = smsBody => {
  const emailLength = smsBody.indexOf("/");
  const bodyLength = smsBody.length;
  const body = smsBody.substring(emailLength + 1, bodyLength);

  return body;
};

module.exports = getBody;
