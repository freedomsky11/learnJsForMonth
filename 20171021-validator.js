var V = require("validator")

function fetchData(userEmailStr, userAgeStr, isManStr) {
  if (!V.isEmail(userEmailStr)) {
    return 'userEmail is error';
  }

  if (!V.isNumeric(userAgeStr)) {
    return 'userAgeStr is error';
  }

  if (!V.isBoolean(isManStr)) {
    return 'isManStr is error';
  }
  // do something
}

console.log(fetchData('i@xugaoyang.com', '18', 'true'));
