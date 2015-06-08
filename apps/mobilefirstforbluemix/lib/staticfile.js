var express = require('express');
var router = express.Router();

//host static files in public folder
//URL:  http://${appHostName}.mybluemix.net/${appHostName}/v1/apps/${applicationId}/public/
router.use('/common', express.static('common'));

module.exports = exports = router;

