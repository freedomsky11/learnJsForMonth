const Joi = require('joi');

function fetchData( obj ) {
  if (Joi.validate(obj.userEmailStr, Joi.string().email().required()).error != null) {
    return 'userEmail is error';
  }

  if (Joi.validate(obj.userAgeStr, Joi.number().required()).error != null) {
    return 'userAgeStr is error';
  }

  if (Joi.validate(obj.isManStr, Joi.boolean().required()).error != null) {
    return 'isManStr is error';
  }
  // do something
}

console.log(fetchData({userEmailStr: 'i@xugaoyang.com', userAgeStr: '18', isManStr: 'true'}));
