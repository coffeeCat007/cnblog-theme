const $ = require('jquery');
const config = require('./config');

require('./themes/'+config.opt_theme.name+'/index.less');
console.log(config.opt_theme.name);
