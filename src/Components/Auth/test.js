export const PasswordRequiredCheck = (pass, ignore) => {
  if (ignore) {
    return false;
  }
  let reg = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  if(!pass) return "Password IS Required"
  if (pass?.length < 6) {
    return "Passwrd Must Be Grether Than Or Equel 6 Chars";
  } else if (!reg.test(pass)) {
    return "Password Must Be Numbers ANd Letters";
  }
  return false;
};

export const EmailCheckRegex = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};
