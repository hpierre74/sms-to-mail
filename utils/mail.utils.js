const getMailAddress = smsBody => {
  const emailLength = smsBody.indexOf("/");
  const email = smsBody.substring(0, emailLength);

  return email;
};

module.exports = getMailAddress;
