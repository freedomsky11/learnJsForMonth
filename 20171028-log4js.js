const log4js = require('log4js');
log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'cheese.log',
      maxLogSize: 1024 * 1024, // = 1Mb
      backups: 3 // keep three backup files
    }
  },
  categories: {
    default: {
      appenders: ['cheese'], level: 'error'
    }
  }
});

const logger = log4js.getLogger('cheese');

setTimeout(function callback() {
  logger.error('write a log...');
  setTimeout(callback, 0);
}, 0);
