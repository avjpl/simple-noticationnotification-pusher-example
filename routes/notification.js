var express = require('express');
var router = express.Router();

var Pusher = require('pusher');
var escapeHTML = require('escape-html');

var pusher = new Pusher({
  appId: '',
  key: '',
  secret: ''
});

router.post('/', function(req, res, next) {
  var message = escapeHTML(req.param('message'));

	pusher.trigger('notifications', 'new_notification', {
		message: message
	});
	res.send("Notification triggered!")
});

module.exports = router;
